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
  this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log("User Login" +data);
    });
 

  const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
}
