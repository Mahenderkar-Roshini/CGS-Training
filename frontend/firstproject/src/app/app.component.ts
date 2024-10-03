import { Component } from '@angular/core';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import #registration
import {NgForm} from "@angular/Forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   day=60;

myBio = 'Hi, My name is Roshini';
container = "margin-top:5px"
details={
  fullname:"",
  email:"",
  mobile:"",
  dob:"",
  uid:0
} 
handleFormSubmit(myForm:NgForm){
  console.log(myForm.value, this.details)
}
}





  



