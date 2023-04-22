import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

interface LoginResponse {
  jwt: string;
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  country: string;
  street_address: string;
  city: string;
  state: string;
  zipcode: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ) {}
  private user = new BehaviorSubject<any>(null);

  getCurrentUser() {
    return !!this.user.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>('http://localhost:3000/api/v1/users/login', {
        email,
        password,
        password_confirmation: password,
      })
      .subscribe((response: any) => {
        this.cookie.set('token', response.payload.token.value);
        this.user.next(response.payload.user);
        this.router.navigate(['/home']); // navigate to home page
      });
  }

  register(user: User) {
    
    return this.http

      .post('http://localhost:3000/api/v1/users/create', user)
      .subscribe((response: any) => {
        // handle success response, such as redirect to login page
        this.router.navigate(['/login']); // navigate to login page
      });
  }

  logout() {
    return this.http
      .delete('http://localhost:3000/api/v1/users/logout')
      .subscribe(() => {
        this.cookie.delete('token');
        this.user.next(null);
        this.router.navigate(['']);
      });
  }

  isLoggedIn() {
    return this.cookie.check('token');
  }
}
