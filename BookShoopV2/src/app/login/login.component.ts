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
        'psw': new FormControl("",[Validators.required,Validators.maxLength(10)])
  });
 
  
}
    

    getName():string{    
        return this.login.get('name').value; 

        }

    getPassword():string{ 
        return this.login.get('psw').value;
        }

    MoveHome(){
        console.log(1);
        this.router.navigate(['/home']);
    }

    MoveRegister(){
        console.log(1);
        this.router.navigate(['/register']);
    }

    CheckLogin(uname:string,psw:string){
        /*if(uname==="user" && psw==="password")
            this.MoveHome();
        
        */
        this.api.doLogin(uname,psw).then(
            result=>{
                console.log(result);
            }
        );
    }

    



}


