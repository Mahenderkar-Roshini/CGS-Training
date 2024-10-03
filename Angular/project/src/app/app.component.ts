import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myUrl:string="https://jsonplaceholder.typicode.com/posts";
  myPostsData!: any;
  constructor(private http:HttpClient) {
    this.http.get(this.myUrl).subscribe((data)=>{
      this.myPostData= values;
    });
  }


  sendData(){
    var postURL="https://jsonplaceholder.typicode.com/posts"
    var dataToSend={

      title: 'foo',
      body: 'bar',
      userId: 1,
    }
    this.http.post(postURL,dataToSend).subscribe((res) => {
      console.log(res)
    })
  }
  // userForm!: FormGroup;
  // constructor(private fb: FormBuilder){
    // this.userForm = this.fb.group({
    //   fullName: ['', [Validators.required, Validators.minLength(3)]],
    //   email: ['', Validators.required],
    //   age: ['', Validators.required]
    // });


  // }
  // handleSubmit() {
  //   if(this.userForm.valid){
  //     console.log(this.userForm.value)
  //   } else{
  //     alert("Please Enter the details")
  //   }
  // }

  
}
