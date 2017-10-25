import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categor',
  templateUrl: './categor.component.html',
  styleUrls: ['./categor.component.css']
})
export class CategorComponent implements OnInit {

private Adv: Array<{}>= new Array();
private His: Array<{}>= new Array();
private Mis: Array<{}>= new Array();

  constructor() {
  	for(let i = 0;i < 5;i++){
  		this.Adv[i]=false;
  		this.His[i]=false;
  		this.Mis[i]=false;
  	}
   }


  ngOnInit() {
  }

}
