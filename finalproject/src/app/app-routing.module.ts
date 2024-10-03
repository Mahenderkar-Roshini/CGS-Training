// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
// import { RegistrationComponent } from './components/registration/registration.component';
// import { AuthGuardService } from './services/auth-guard.service';
// import { AuthGuard } from './guards/auth.guard'; // if using a guard

// import { AccountSettingsComponent } from './account-settings/account-settings.component';





const routes: Routes = [
  // { path: 'register', component: RegistrationComponent },
  // { path: '', redirectTo: '/register', pathMatch: 'full' },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuardService],
    data: { role: 'User' }
  },
  {
    path: 'vendor-dashboard',
    component: VendorDashboardComponent,
    canActivate: [AuthGuardService],
    // canActivate: [AuthGuard],
    data: { role: 'Vendor' },
  },

  // { path: '', redirectTo: '/vendor-dashboard/profile', pathMatch: 'full' }, // Default route
  // { path: '**', redirectTo: '/vendor-dashboard/profile' }, // Wildcard route,
  { path: '', redirectTo: '/login', pathMatch:'full' },

  { path: 'vendor-dashboard', component: VendorDashboardComponent},
  // { path: 'vendor-dashboard/active-vendors', component: ActiveVendorsComponent, canActivate: [AuthGuard] },
  // { path: 'vendor-dashboard/pending-approvals', component: PendingApprovalsComponent, canActivate: [AuthGuard] },



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
