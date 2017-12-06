import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { HomeComponent } from '../home/home.component';

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

  constructor() {
    this.name=HomeComponent.cartName;
    this.author=HomeComponent.cartAuthor;
    this.price=HomeComponent.cartPrice;
   /* let i;
	for(i=1;i<HomeComponent.index;i++)
		{
			this.totPrice=this.totPrice+this.price[i];
		}*/
  	this.price[HomeComponent.index+1]=HomeComponent.totalPrice;
  }

  ngOnInit() {
  }

   
}
