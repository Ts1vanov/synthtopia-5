import { Component,OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';
import { Cart } from 'src/app/models/cart.model';

const ROWS_HEIGHT:{ [id:number]: number } = {1: 400, 3: 335, 4: 350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  constructor (
     private cartService: CartService,
     private storeService: StoreService
      ) { }

      cart: Cart = { items: []};

cols: number = 3;
rowHeight = ROWS_HEIGHT[this.cols];
category: string;
products: Array<Product>;
sort = 'desc';
count = '12';
productsSubscription: Subscription;

    ngOnInit() {
      this.getProducts();

      this.cartService.cart.subscribe((_cart) => {
        this.cart = _cart
       })
    }

    getProducts() {
    this.productsSubscription = this.storeService.getAllProoducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      })
    }

  onColumnsCountChange(colsNum: number) {
this.cols = colsNum;
this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string) {
    this.category = newCategory;
    this.getProducts();
  }
  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

  onItemsCountChange(newCount: number) {
    this.count = newCount.toString();
    this.getProducts();
  }
  onSortChange(newSort: string) {
    this.sort = newSort;
    this.getProducts();
  }

  ngOnDestroy(): void {
    if(this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
