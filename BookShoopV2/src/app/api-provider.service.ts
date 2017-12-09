import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpModule } from '@angular/http';

@Injectable()
export class ApiProviderService {
    constructor(public http: Http) {
    }
    getUserID(name){

        let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any ='http://localhost/php_script/getUserId.php?name='+name;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });
    }

   doLogin(id){
       
        let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any ='http://localhost/php_script/getUserLogin.php?id='+id;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });

    }
     
    getTitle(idd){
       
        let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any ='http://localhost/php_script/getBookName.php?id='+idd;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });
}
    getDescription(idd){
       
        let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any ='http://localhost/php_script/getBookDescription.php?id='+idd;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });

    }
    
    getBookImage(idd){
       
        let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any ='http://localhost/php_script/getBookImage.php?id='+idd;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });    
} 

 getBookCategory(idd){
       
        let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any ='http://localhost/php_script/getBooksCategory.php?id='+idd;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });    
}

    register(username: String,password:String,name: String,pname: String,phone: String,email: String,adress: String): Promise<any> {
          let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any='http://localhost/php_script/addUser.php?user='+username+'&pass='+password+'&name='+name+'&pname='+pname+'&adress='+adress+'&phone='+phone+'&email='+email;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });

    }

    getBookId(bookname: String): Promise<any> {
          let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any='http://localhost/php_script/getBookId.php?book='+bookname;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });

    }


    getBookAuthor(id): Promise<any> {
          let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any='http://localhost/php_script/getBookAuthor.php?id='+id;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });

    }

    getBookPrice(id): Promise<any> {
          let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any='http://localhost/php_script/getBookPrice.php?id='+id;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });

    }

    getBookEditure(id): Promise<any> {
          let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any='http://localhost/php_script/getBookEditure.php?id='+id;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });

    }

    getBookType(id): Promise<any> {
          let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any='http://localhost/php_script/getBookIdtip.php?id='+id;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    });
    }
    addBook(idt,title,author,editure,image,price,description){
       
        let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any ='http://localhost/php_script/addBook.php?tip='+idt+'&name='+title+'&autor='+author+'&ed='+editure+'&img='+image+'&price='+price+'&desc='+description;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    }); 
    }

    updateBook(idb,idt,title,author,editure,image,price,description){
       
        let body:string="key=create",
        type:string="application/x-www-form-urlencoded; chart=UTF-8",
        headers:any=new Headers({'Contet-Type': type }),
        options:any=new RequestOptions({headers:headers}),
        url:any ='http://localhost/php_script/updateBook.php?idb='+idb+'&tip='+idt+'&name='+title+'&autor='+author+'&ed='+editure+'&img='+image+'&price='+price+'&desc='+description;

    return new Promise(resolve=>{
    this.http.post(url,body,options).subscribe((data)=>{
            resolve(data.json());
        });
    }); 
    }
}  