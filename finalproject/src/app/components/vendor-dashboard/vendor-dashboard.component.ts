import { Component } from '@angular/core';

// Define an interface for Vendor
interface Vendor {
  name: string;
  email: string;
  status: string;
  services:string
};

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent {
  // Explicitly define the type for vendors
  activeVendors: Vendor[] = [
    { name: 'Ankitha', email: 'ankitha@gmail.com', status: 'Active',services:'Shirts' },
    { name: 'Priya', email: 'priya@gmail.com', status: 'Active',services:'Trousers' },
    { name: 'Sukumar', email: 'sukumar@gmail.com', status: 'Active',services:'KidsWear' }
  ];

  pendingVendors: Vendor[] = [
    { name: 'Santosh', email: 'santosh@gmail.com', status: 'Pending',services:'Pants' },
    { name: 'Rajesh', email: 'rajesh@gmail.com', status: 'Pending',services:'Tracks' },

  ];

  TotalVendors: Vendor[] = [
    { name: 'Ankitha', email: 'ankitha@gmail.com', status: 'Active', services:'Towels'},
    { name: 'sukumar', email: 'sukumar@gmail.com', status: 'Active',services:'Sarees' },
    { name: 'Santosh', email: 'santosh@gmail.com', status: 'Pending',services:'Lenin shirts' },
    { name: 'Rajesh', email: 'rajesh@gmail.com', status: 'Pending',services:'Jeans' },
    { name: 'Priya', email: 'priya@gmail.com', status: 'Active',services:'Trousers' },

  ]

  // Initialize displayedVendors as an empty array of type Vendor[]
  displayedVendors: Vendor[] = [];
  
  currentVendorView: string = '';
  showVendorsList: boolean = false;

  // Show Active Vendors
  showActiveVendors() {
    this.displayedVendors = this.activeVendors;
    this.currentVendorView = 'Active Vendors';
    this.showVendorsList = true;
  }

  // Show Pending Approvals
  showPendingApprovals() {
    this.displayedVendors = this.pendingVendors;
    this.currentVendorView = 'Pending Approvals';
    this.showVendorsList = true;
  }

  showTotalVendors(){
    this.displayedVendors = this.TotalVendors;
    this.currentVendorView = 'Total Approvals';
    this.showVendorsList = true;
  }

  logout() {
    // Implement your logout logic here
  }
}
