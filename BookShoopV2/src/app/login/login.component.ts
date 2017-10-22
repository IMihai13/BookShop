import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   

    constructor(private router : Router){

    }

    ngOnInit() {
    }

    MoveHome(){
        console.log(1);
        this.router.navigate(['/home']);
    }

    MoveRegister(){
        console.log(1);
        this.router.navigate(['/register']);
    }
}


