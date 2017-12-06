import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ApiProviderService } from '../api-provider.service';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ApiProviderService],
})

export class LoginComponent implements OnInit {

private login:FormGroup; 
private loginC:LoginComponent;

constructor(private router : Router ,public api: ApiProviderService, public http: Http,){
}

ngOnInit(): void {
    this.login = new FormGroup({
   'name': new FormControl("",[Validators.required]),
   'psw': new FormControl("",[Validators.required,Validators.maxLength(10)]),
    });
}
    
 MoveRegister(){
  
    this.router.navigate(['/register']);
 }
 
 logForm(name,password){
        
        let id;
        this.api.getUserID(name).then(
            result=>{
                console.log(result);
                if(result != 2){
                    this.api.doLogin(result).then(
                       result=>{
                          console.log(result);
                          if(result != 2)
                           if(result == password)
                              this.router.navigate(['/home']);
                          });              
                }
        });         
   }
 }