import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiProviderService } from '../api-provider.service';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';

import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private register:FormGroup;
  
  constructor(private router : Router,public api: ApiProviderService) { }

  ngOnInit() {
  this.register=new FormGroup({
        'name': new FormControl(name,[Validators.required,Validators.maxLength(15)]),
        'fname': new FormControl(name,[Validators.required,Validators.maxLength(35)]),
        'email': new FormControl(name,[Validators.required,Validators.maxLength(35)]),
        'user': new FormControl(name,[Validators.required,Validators.maxLength(10)]),
        'password': new FormControl(name,[Validators.required,Validators.maxLength(10)]),
        'contact': new FormControl(name,[Validators.required,Validators.maxLength(10)]),
        'adress': new FormControl(name,[Validators.required,Validators.maxLength(35)])
  })
  }

   MoveLogin(){
        console.log(1);
        this.router.navigate(['/login']);
    }

    SignUp(name:string,fname:string,email:string,user:string,passward:string,contact:string,adress:string){
        console.log(name);
        console.log(fname);
        console.log(email);
        console.log(user);
        console.log(passward);
        console.log(contact);
        console.log(adress);
        this.api.register(user,passward,name,fname,contact,email,adress).then(
            result=>{
                console.log(result);
            });
        this.MoveLogin();
    }

}
