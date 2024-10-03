// src/app/services/auth-guard.service.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    const userRole = this.authService.getRole();
    
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

    const requiredRole = route.data['role'];
    if (userRole === requiredRole) {
      return true;  // If the user's role matches the required role for the route, allow access
    } else {
      this.router.navigate(['/login']);  // If not, redirect to login
      return false;
    }
  }
}
