import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/fratures/auth/models/user.model';
import { AuthService } from 'src/app/fratures/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  user? : User;
  constructor(private authService: AuthService, private authServices:AuthService,
    private router:Router) {}
  ngOnInit(): void {
    this.authService.user().subscribe({
      next:(res)=>{
        this.user = res;
      }
    });
     this.user= this.authService.getUser();
  }

  onLogout(): void{
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
