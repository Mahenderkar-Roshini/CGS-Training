// src/app/components/user-dashboard/user-dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) { }

  tasks: string[] = [
    'Completed vendor review for Surender',
    'Approve Suresh\'s pending contract',
    'Schedule meeting with kumar',
    'Finalize Kiran\'s service',
    'Checking the new collection'
  ];

  notifications: string[] = [
    'Priya A has updated their contact details',
    'Kiran\'s contract is pending approval',
    'New vendor Kumar registered in the system',
    'Pream has completed registration',
    'Surender needs document verification'
  ];

  showAllTasks = false;
  showAllNotifications = false;

  

  toggleTasks() {
    this.showAllTasks = !this.showAllTasks;
  }

  toggleNotifications() {
    this.showAllNotifications = !this.showAllNotifications;
  }

  ngOnInit() {
    // Listen for fragment changes and scroll to the element
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
