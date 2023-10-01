
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CodePulse.API.Data
{
    public class AuthDbContext : IdentityDbContext
    {
        public AuthDbContext(DbContextOptions<AuthDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            var readerRoleId = "19db87a1-4f7a-4315-84ba-65ee4446c636";
            var writerRoleId = "301b99a3-f48b-449d-b021-d558808bc307";

            //create reader and Writer Role

            var roles = new List<IdentityRole>
            {
                new IdentityRole()
                {
                    Id = readerRoleId,
                    Name = "Reader",
                    NormalizedName = "Reader".ToUpper(),
                    ConcurrencyStamp = readerRoleId
                },
                new IdentityRole()
                {
                    Id = writerRoleId,
                    Name = "Writer",
                    NormalizedName = "Writer".ToUpper(),
                    ConcurrencyStamp = writerRoleId
                }
            };

            // seed the role
            builder.Entity<IdentityRole>().HasData(roles);

            // Create an Admin User
            var adminUserId = "8d27ae81-0429-49ad-a689-b068ec68e197";
            var admin = new IdentityUser
            {
                Id = adminUserId,
                UserName = "admin",
                Email = "admin@123gmail.com",
                NormalizedEmail = "admin@123gmail.com".ToUpper(),
                NormalizedUserName = "admin".ToUpper()
            };
            admin.PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(admin, "Admin@123");
            
            builder.Entity<IdentityUser>().HasData(admin);

            //Give Roles To Admin

            var adminRoles = new List<IdentityUserRole<string>>()
            {
                new()
                {
                    UserId =adminUserId,
                    RoleId  = readerRoleId
                },
                 new()
                {
                    UserId =adminUserId,
                    RoleId  = writerRoleId
                }
            };
            builder.Entity<IdentityUserRole<string>>().HasData(adminRoles);
        }
    }
}
