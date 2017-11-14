import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private bookname3 : string;
	public static cartBooks:number[]=[];
	public static index:number=0;
  constructor() {
  	this.bookname3 = "bookname3";
  	}

  ngOnInit() {
  }

  addToCart(bookname:string){
  	let id: number=3;
  	//get id by bookname
  	HomeComponent.cartBooks[HomeComponent.index]=id;
  	HomeComponent.index++;
  	console.log(bookname);

  }

}
