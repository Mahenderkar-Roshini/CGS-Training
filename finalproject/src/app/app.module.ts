import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { VendorDashboardComponent } from './components/vendor-dashboard/vendor-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './services/authentication.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    VendorDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
 

  ],providers:[AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
