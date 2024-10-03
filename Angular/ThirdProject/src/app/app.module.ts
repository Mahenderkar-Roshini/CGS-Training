import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListingComponent } from './components/task-listing/task-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    DashboardComponent,
    ProfileComponent,
    TaskFormComponent,
    TaskListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
