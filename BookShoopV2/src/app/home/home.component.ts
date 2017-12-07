import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from '../api-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title1 : any;
  public details1 :any;
  public image1: any;
  public title2 : any;
  public image2: any;
  public details2 :any;
  public title3 : any;
  public image3: any;
  public details3 :any;
  public title4 : any;
  public image4: any;
  public details4 :any;
  public price1:any;
  public price2:any;
  public price3:any;
  public price4:any;


  private cartBook:number=0;
  public static cartName:any[]=[];
  public static cartPrice:number[]=[];
  public static cartAuthor:any[]=[];
  public static index:number=-1;
  public static totalPrice:any=0;
  

  constructor(public api: ApiProviderService) {
  	   this.api.getTitle(13).then(
        result =>{
        console.log(result);
            this.title1 = result;        
        });
        this.api.getDescription(13).then(
        result =>{
          console.log(result);
            this.details1 = result;
        });


        this.api.getBookImage(13).then(
        result =>{
          
            this.image1=result;        
        });

        this.api.getDescription(13).then(
        result =>{
          console.log(result);
            this.details1 = " Description: " + result;
        });

         this.api.getTitle(14).then(
        result =>{
        console.log(result);
            this.title2 = result;        
        });

        this.api.getBookImage(14).then(
        result =>{
        console.log(result);
            this.image2 = result;        
        });

        this.api.getDescription(14).then(
        result =>{
          console.log(result);
            this.details2 = " Description: " + result;
        });

         this.api.getTitle(15).then(
        result =>{
        console.log(result);
            this.title3 = result;        
        });

        this.api.getBookImage(15).then(
        result =>{
        console.log(result);
            this.image3 = result;        
        });

        this.api.getDescription(15).then(
        result =>{
          console.log(result);
            this.details3 = " Description: " + result;
        });

         this.api.getTitle(16).then(
        result =>{
        console.log(result);
            this.title4 = result;        
        });

        this.api.getBookImage(16).then(
        result =>{
        console.log(result);
            this.image4 =result;        
        });

        this.api.getDescription(16).then(
        result =>{
          console.log(result);
            this.details4 = " Description: " + result;
        });

          this.api.getBookPrice(13).then(
                result =>{
                   this.price1 ="Price: " +result;
              });


          this.api.getBookPrice(14).then(
                result =>{
                   this.price2 ="Price: " +result;
              });


          this.api.getBookPrice(15).then(
                result =>{
                   this.price3 ="Price: " +result;
              });


          this.api.getBookPrice(16).then(
                result =>{
                   this.price4 ="Price: " +result;
              });

  	}

  ngOnInit() {
  }

  
  addToCart(bookname:string){
  HomeComponent.index++;
    this.api.getBookId(bookname).then(
            result=>{
                this.cartBook=result;
                console.log(result);
  
    this.api.getBookPrice(this.cartBook).then(
            result=>{
                HomeComponent.totalPrice += parseFloat(result);
                HomeComponent.cartPrice[HomeComponent.index]=result;
                console.log(result);
                });
    this.api.getBookAuthor(this.cartBook).then(
            result=>{
                HomeComponent.cartAuthor[HomeComponent.index]=result;
                console.log(result);
                });  
                HomeComponent.cartName[HomeComponent.index]=bookname;

  });  

  }


}
