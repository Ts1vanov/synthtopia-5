import { Component,Input,Output, EventEmitter,OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {

@Input() fullWidthMode: boolean = false;
@Input() product: Product;
;
@Output() addToCart = new EventEmitter();

onAddToCart(): void {
this.addToCart.emit(this.product);
}


ngOnInit(): void {

}
}
