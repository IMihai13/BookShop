import { Component, OnInit, } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {

private login:FormGroup; 
private loginC:LoginComponent;

    constructor(private router : Router){
 

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
        if(uname==="user" && psw==="password")
            this.MoveHome();
        /*
        this.loginC.doLogin(uname,psw).then(
            result=>{
                console.log(result);
            }
        );
        */
    }

    doLogin(username,password){
    /*
    let body:string="key=create&user="+username+"pass="+password,
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:'http://localhost/BookShoopV2/php_script/getUserLogin.php';

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });
    */
    }



}


