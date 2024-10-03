import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  card="border:1px solid black; padding:10px 20px";
  data = [
    {
      name:"pushpa",
      hero: "AA",
      duration:2.5,
      rating: 5
     },
     {
      name:"deevara",
      hero:"ntr",
      duration:3,
      rating:4
     },

     {
      name:"kalki",
      hero:"prabhas",
      duration:2.8,
      rating:4.5
     },
  ]
}
