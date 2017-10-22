import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	private i: number;
	@Output() arrowClick = new EventEmitter<boolean>();
    @Input() heading: string = 'Maria';
    @Input() details:string = '';
    @Input() isExpanded: boolean = true;
  constructor() {
  for( this.i=0 ;this.i<7;this.i++){
	 this.heading = "Maria"+this.i;
	 this.details = "merge";
}
  
     }

  ngOnInit() {
  }

   open() {
        this.arrowClick.next(true);
    }

    close() {
        this.arrowClick.next(false);
    }
}
