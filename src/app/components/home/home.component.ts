import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isProfileMenuOpen = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleMenu() {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  confirmSignOut() {
    const confirmed = window.confirm('Are you sure you want to sign out?');
    if (confirmed) {
      this.authService.logout();
    }
  }
}
