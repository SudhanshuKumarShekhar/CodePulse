import { Component } from '@angular/core';
import { LoginRequest } from '../models/login-request.models';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model : LoginRequest;

  constructor( private authService: AuthService, private cookiesService: CookieService, private router:Router) {
    this.model = {
      email: '',
      password: ''
    };
    
  }
  onformSubmit():void{
      this.authService.login(this.model).subscribe({
        next: (res) =>{
          // set Auth cookie
          this.cookiesService.set('Authorization',`Baerer ${res.token}`,
          undefined,'/', undefined, true, 'Strict');

          // set user
          this.authService.setUser({
            email: res.email,
            roles :res.roles
          });
          // redirect Back to Home page
          this.router.navigateByUrl('/');
        }
      });
  }
}
