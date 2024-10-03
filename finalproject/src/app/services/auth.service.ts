// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  username: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData = {
    users: [
      { username: 'user1', password: 'password1', role: 'User' },
      { username: 'user2', password: 'password2', role: 'User' }
    ],
    vendors: [
      { username: 'vendor1', password: 'vendorpassword1', role: 'Vendor' },
      { username: 'vendor2', password: 'vendorpassword2', role: 'Vendor' }
    ]
  };

  private currentUserRole: string | null = null;

  constructor(private router: Router) {}

  // Perform login and store user data in localStorage
  login(username: string, password: string, role: string): boolean {
    let user: User | undefined;
    if (role === 'User') {
      user = this.userData.users.find(u => u.username === username && u.password === password);
    } else if (role === 'Vendor') {
      user = this.userData.vendors.find(v => v.username === username && v.password === password);
    }

    if (user) {
      this.currentUserRole = user.role;
      localStorage.setItem('authToken', JSON.stringify({ username: user.username, role: user.role }));
      return true;
    }
    return false;
  }

  // Perform signup and add user to in-memory data
  signup(username: string, password: string, role: string): boolean {
    if (role === 'User') {
      this.userData.users.push({ username, password, role });
    } else if (role === 'Vendor') {
      this.userData.vendors.push({ username, password, role });
    }
    return true;
  }

  // Check if the user is authenticated by checking localStorage
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Get the role of the current user from localStorage
  getRole(): string | null {
    const token = localStorage.getItem('authToken');
    if (token) {
      const user = JSON.parse(token);
      return user.role;
    }
    return null;
  }

  // Log out and clear localStorage, then redirect to login page
  logout(): void {
    localStorage.removeItem('authToken');
    this.currentUserRole = null;
    this.router.navigate(['/login']);
  }
}
