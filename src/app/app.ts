import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App implements OnInit{
  title = 'frontendprojectassignment';
  is_prod=environment.PRODUCTION;
  ngOnInit(): void {
    if(this.is_prod){
      console.log("my environment is Prod")
    }
    else{
      console.log("my environment is Dev")
    }
  }
}
