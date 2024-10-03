// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    const { username, password, role } = this.loginForm.value;
    const isValid = this.authService.login(username, password, role);
    if (isValid) {
      if (role === 'User') {
        this.router.navigate(['/user-dashboard']);
      } else if (role === 'Vendor') {
        this.router.navigate(['/vendor-dashboard']);
      }
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }

}
