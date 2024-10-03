// src/app/components/signup/signup.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;
  showPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    const { email, password, confirmPassword, role } = this.signupForm.value;
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    const isSignedUp = this.authService.signup(email, password, role);
    if (isSignedUp) {
      alert('Signup successful! Please login.');
      // Optionally, navigate to login page
    } else {
      alert('Signup failed. Please try again.');
    }
  }

}
