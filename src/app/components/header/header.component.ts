import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Cart,CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private _cart: Cart = { items: [] };
  itemsQuantity: number;

  constructor (
    private cartService : CartService, 
    ){}
    
    ngOnInit(): void {


     }
  
  @Input() 
  get cart(): Cart {
    return this._cart
  }
  
  set cart(cart : Cart) {
    this._cart = cart;
  
    this.itemsQuantity = cart.items
    .map((item) => item.quantity)
    .reduce((prev, current) => prev + current ,0);
  }
  
  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
   }
  
   onClearCart() {
    this.cartService.clearCart()
   }


  }
  
  
  