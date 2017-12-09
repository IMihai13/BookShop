import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HomeComponent} from '../home/home.component';
import { ApiProviderService } from '../api-provider.service';

import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-categor',
  templateUrl: './categor.component.html',
  styleUrls: ['./categor.component.css']
})
export class CategorComponent implements OnInit {

private Adv: Array<{}>= new Array();
private His: Array<{}>= new Array();
private Mis: Array<{}>= new Array();
private TitleA: Array<{}>= new Array();
private DetailsA: Array<{}>= new Array();
private TitleM: Array<{}>= new Array();
private DetailsM: Array<{}>= new Array();
private TitleH: Array<{}>= new Array();
private DetailsH: Array<{}>= new Array();
private PriceA: Array<{}>=new Array();
private PriceH: Array<{}>=new Array();
private PriceM: Array<{}>=new Array();
private list: String;
private cartBook:any;

  constructor(private router : Router,private api : ApiProviderService) {
    for(let i = 0;i < 5;i++){
  		this.Adv[i]=true;
  		this.His[i]=true;
  		this.Mis[i]=true;
      this.TitleA[i] = "";
      this.DetailsA[i] = "";
      this.TitleH[i] = "";
      this.DetailsH[i] = "";
      this.TitleM[i] = "";
      this.DetailsM[i] = "";
      this.PriceA[i] = "";
      this.PriceH[i] = "";
      this.PriceM[i] = "";

}

   this.api.getBookCategory(1).then( 
      result=>{ 
              let i = 0;
              if(String(result[0]) != "undefined"){
                this.Adv[0] = false;
                this.api.getTitle(String(result[0])).then(
                  result =>{
                      this.TitleA[0]=result;
              });
               this.api.getDescription(String(result[0])).then(
                result =>{
                   this.DetailsA[0] = result;
              });

              this.api.getBookPrice(String(result[0])).then(
                result =>{
                   this.PriceA[0] ="Price: " +result;
              });
            }

              if(String(result[1]) != "undefined"){
                this.Adv[1] = false;
                this.api.getTitle(String(result[1])).then(
                  result =>{
                      this.TitleA[1]=result;
              });
               this.api.getDescription(String(result[1])).then(
                result =>{
                   this.DetailsA[1] = result;
              });

              this.api.getBookPrice(String(result[1])).then(
                result =>{
                   this.PriceA[1] ="Price: " +result;
              });
            }

              if(String(result[2]) != "undefined"){
                this.Adv[2] = false;
                this.api.getTitle(String(result[2])).then(
                  result =>{
                      this.TitleA[2]=result;
              });
               this.api.getDescription(String(result[2])).then(
                result =>{
                   this.DetailsA[2] = result;
              });
              
              this.api.getBookPrice(String(result[2])).then(
                result =>{
                   this.PriceA[2] ="Price: " +result;
              });
            }

              if(String(result[3]) != "undefined"){
                this.Adv[3] = false;
                this.api.getTitle(String(result[3])).then(
                  result =>{
                      this.TitleA[3]=result;
              });
               this.api.getDescription(String(result[3])).then(
                result =>{
                   this.DetailsA[3] = result;
              });
              this.api.getBookPrice(String(result[3])).then(
                result =>{
                   this.PriceA[3] ="Price: " +result;
              });
            }

              if(String(result[4]) != "undefined"){
                this.Adv[4] = false;
                this.api.getTitle(String(result[4])).then(
                  result =>{
                      this.TitleA[4]=result;
              });
               this.api.getDescription(String(result[4])).then(
                result =>{
                   this.DetailsA[4] = result;
              });
              this.api.getBookPrice(String(result[4])).then(
                result =>{
                   this.PriceA[4] ="Price: " +result;
              });
            }
      });
  
   this.api.getBookCategory(2).then( 
      result=>{
        if(String(result[0]) != "undefined"){
                this.His[0] = false;
                this.api.getTitle(String(result[0])).then(
                  result =>{
                      this.TitleH[0]=result;
                      
              });
               this.api.getDescription(String(result[0])).then(
                result =>{
                   this.DetailsH[0] = result;

              });
               this.api.getBookPrice(String(result[0])).then(
                result =>{
                   this.PriceH[0] ="Price: " +result;
              });
            }

              if(String(result[1]) != "undefined"){
                this.His[1] = false;
                this.api.getTitle(String(result[1])).then(
                  result =>{
                      this.TitleH[1]=result;
              });
               this.api.getDescription(String(result[1])).then(
                result =>{

                   this.DetailsH[1] = result;
              });
               this.api.getBookPrice(String(result[1])).then(
                result =>{
                   this.PriceH[1] ="Price: " +result;
              });
            }

              if(String(result[2]) != "undefined"){
                this.His[2] = false;
                this.api.getTitle(String(result[2])).then(
                  result =>{
                      this.TitleH[2]=result;
              });
               this.api.getDescription(String(result[2])).then(
                result =>{
                   this.DetailsH[2] = result;
              });

               this.api.getBookPrice(String(result[2])).then(
                result =>{
                   this.PriceH[2] ="Price: " +result;
              });
            }

              if(String(result[3]) != "undefined"){
                this.His[3] = false;
                this.api.getTitle(String(result[3])).then(
                  result =>{
                      this.TitleH[3]=result;
              });
               this.api.getDescription(String(result[3])).then(
                result =>{
                   this.DetailsH[3] = result;
              });

               this.api.getBookPrice(String(result[3])).then(
                result =>{
                   this.PriceH[3] ="Price: " +result;
              });
            }

              if(String(result[4]) != "undefined"){
                this.His[4] = false;
                this.api.getTitle(String(result[4])).then(
                  result =>{
                      this.TitleH[4]=result;
              });
               this.api.getDescription(String(result[4])).then(
                result =>{
                   this.DetailsH[4] = result;
              });

               this.api.getBookPrice(String(result[4])).then(
                result =>{
                   this.PriceH[4] ="Price: " +result;
              });
            }});

     this.api.getBookCategory(3).then( 
      result=>{
        if(String(result[0]) != "undefined"){
                this.Mis[0] = false;
                this.api.getTitle(String(result[0])).then(
                  result =>{
                      this.TitleM[0]=result;
              });
               this.api.getDescription(String(result[0])).then(
                result =>{
                   this.DetailsM[0] = result;
              });


               this.api.getBookPrice(String(result[0])).then(
                result =>{
                   this.PriceM[0] ="Price: " +result;
              });
            }

              if(String(result[1]) != "undefined"){
                this.Mis[1] = false;
                this.api.getTitle(String(result[1])).then(
                  result =>{
                      this.TitleM[1]=result;
              });
               this.api.getDescription(String(result[1])).then(
                result =>{
                   this.DetailsM[1] = result;
              });

               this.api.getBookPrice(String(result[1])).then(
                result =>{
                   this.PriceM[1] ="Price: " +result;
              });
            }

              if(String(result[2]) != "undefined"){
                this.Mis[2] = false;
                this.api.getTitle(String(result[2])).then(
                  result =>{
                      this.TitleM[2]=result;
              });
               this.api.getDescription(String(result[2])).then(
                result =>{
                   this.DetailsM[2] = result;
              });


               this.api.getBookPrice(String(result[2])).then(
                result =>{
                   this.PriceM[2] ="Price: " +result;
              });
            }

              if(String(result[3]) != "undefined"){
                this.Mis[3] = false;
                this.api.getTitle(String(result[3])).then(
                  result =>{
                      this.TitleM[3]=result;
              });
               this.api.getDescription(String(result[3])).then(
                result =>{
                   this.DetailsM[3] = result;
              });

               this.api.getBookPrice(String(result[3])).then(
                result =>{
                   this.PriceM[3] ="Price: " +result;
              });
            }

              if(String(result[4]) != "undefined"){
                this.Mis[4] = false;
                this.api.getTitle(String(result[4])).then(
                  result =>{
                      this.TitleM[4]=result;
              });
               this.api.getDescription(String(result[4])).then(
                result =>{
                   this.DetailsM[4] = result;
              });

               this.api.getBookPrice(String(result[4])).then(
                result =>{
                   this.PriceM[4] ="Price: " +result;
              });
            }
            });
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

  GOaddBook(){
   this.router.navigate(['/adder']);
  
  }

  edit(t:string){
    EditBookComponent.title = t;
    console.log(t);
    console.log(EditBookComponent.title);
    this.router.navigate(['/editer']);
  }

  ngOnInit() {
  }
}
