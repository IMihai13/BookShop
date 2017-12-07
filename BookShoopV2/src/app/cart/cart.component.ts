import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	private name:Array<{}>= new Array();
	private author:Array<{}>= new Array();
	private price:Array<{}>= new Array();
	private totPrice:any=0;

  constructor(private router : Router) {
    this.name=HomeComponent.cartName;
    this.author=HomeComponent.cartAuthor;
    this.price=HomeComponent.cartPrice;
  
  	this.price[HomeComponent.index+1] = "Total:" +HomeComponent.totalPrice;
  }

  ngOnInit() {
  }

   
   myFunction(){
    HomeComponent.cartName = [];
    HomeComponent.cartAuthor =[];
    HomeComponent.cartPrice= [];
   

   HomeComponent.index= -1;
   HomeComponent.totalPrice = 0 ;
   this.router.navigate(['/home']);

   }
}
