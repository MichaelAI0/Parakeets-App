import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

interface LoginResponse {
  jwt: string;
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

  logout() {
    return this.http
      .delete('http://localhost:3000/api/v1/users/logout')
      .subscribe(() => {
        this.cookie.delete('token');
        this.user.next(null);
        this.router.navigate(['']); // navigate to login page
      });
  }

  isLoggedIn() {
    return this.cookie.check('token');
  }
}
