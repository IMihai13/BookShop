import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserResponse {
  login: string;
  bio: string;
  company: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BookShop';

  constructor(private http:HttpClient){
  
  }

  ngOnInit():void{

  }
}
