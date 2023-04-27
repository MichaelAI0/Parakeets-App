import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/functions/login/login.component';

import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './components/functions/register/register.component';
import { NewUserAuthGuardService } from './services/new.guard';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    canActivate: [NewUserAuthGuardService],
  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
