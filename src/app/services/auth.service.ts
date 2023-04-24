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
  password_digest: string;
  country: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ) {
    const token = this.cookie.get('token');
    if (token) {
      // If a token exists in the cookie, set the user as authenticated
      this.user.next(true);
    }
  }

  getCurrentUser() {
    return this.user.value;
  }

  login(email: string, password: string) {
    return this.http
      .post<LoginResponse>('http://localhost:3000/api/v1/users/login', {
        email,
        password,
        password_confirmation: password,
      })
      .subscribe(
        (response: any) => {
          this.cookie.set('token', response.payload.token.value);
          this.user.next(true);
          this.router.navigate(['/home']); // navigate to home page
        },
        (error) => {
          console.error(error);
          // Handle the error here (e.g., display an error message to the user)
        }
      );
  }

  register(user: User) {
    return this.http
      .post('http://localhost:3000/api/v1/users/create', user)
      .subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error(error);
          // Handle the error here (e.g., display an error message to the user)
        }
      );
  }

  logout() {
    return this.http
      .delete('http://localhost:3000/api/v1/users/logout')
      .subscribe(
        () => {
          this.cookie.delete('token');
          this.user.next(false);
          this.router.navigate(['']);
        },
        (error) => {
          console.error(error);
          // Handle the error here (e.g., display an error message to the user)
        }
      );
  }

  isLoggedIn() {
    return this.user.value;
  }
}
