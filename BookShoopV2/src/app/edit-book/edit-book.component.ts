import { Component, OnInit } from '@angular/core';

import { ApiProviderService } from '../api-provider.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
	
	public static title;
	private titl;
	private editure;
	private image;
	private description;
	private price;
	private author;
	private idt;
	private id;
	private tip;
  constructor(private router : Router,public api: ApiProviderService) {
  	 this.titl = EditBookComponent.title;
      this.api.getBookId(this.titl).then(
            result=>{
                this.id = result;
  
    this.api.getBookPrice(this.id).then(
            result=>{
                this.price = result;
                });
    this.api.getBookAuthor(this.id).then(
            result=>{
                	this.author = result;
                });  
     
     this.api.getDescription(this.id).then(
     		result =>{
     			this.description = result;
     		});

     this.api.getBookImage(this.id).then(
     		result =>{
     			this.image = result;
     		});

      this.api.getBookEditure(this.id).then(
      		
     		result =>{
     			this.editure = result;
     		});

       this.api.getBookType(this.id).then(
     		result =>{
     			this.tip = result;
     			if(result == 1)
     				this.idt = "Adventure";
     			if(result  == 2)
     				this.idt = "History";
     			if(result == 3)
     				this.idt = "Mistery"
     		});


  });
  	 }


  editBooks(author,editure,image,description,price){
  	console.log(this.tip);
  	  	this.api.updateBook(this.id,this.tip,this.titl,author,editure,image,price,description).then(
  		result =>{ 

  			console.log(result);
  			
  		});
  		this.router.navigate(['/categor']);
  }
  
  ngOnInit() {
  }

}
