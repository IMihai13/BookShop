import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from '../api-provider.service';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
	
  

  constructor(private router : Router,public api: ApiProviderService) { 
  	
  	}
  ngOnInit() {
  }

 
  addBooks(title,idt,author,editure,image,description,price){
  		this.api.addBook(idt,title,author,editure,image,price,description).then(
            result=>{
                console.log(result);
            });
      this.router.navigate(['/categor']);

    }
  }


