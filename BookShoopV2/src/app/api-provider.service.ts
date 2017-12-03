import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpModule } from '@angular/http';




@Injectable()
export class ApiProviderService {
    constructor(public http: Http) {
    }

    doLogin(username: String,password:String): Promise<any> {
        //return this.http.get('').map((res: Response) => res.json())
          //  .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    

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

    }
     
    
}