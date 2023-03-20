import { Component,Output,EventEmitter,OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs'
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit, OnDestroy {
@Output() columnsCountChange = new EventEmitter<number>();
@Output() itemsCountChange = new EventEmitter<number>();
@Output() sortChange = new EventEmitter<string>();
sort: string = 'descending';
itemsShowCount: number = 12;



categories: Array<string>;
categoriesSubsciption: Subscription;
categorySelected: string;

@Output() showCategory = new EventEmitter<string>();


constructor ( private storeService : StoreService) {}

ngOnInit () {
  this.categoriesSubsciption = this.storeService.getAllCategories()
  .subscribe((response) => {
    this.categories = response;
  });
}

onSortUpdated(newSort: string) {
  this.sort = newSort;
  this.sortChange.emit(newSort);
}

onItemsUpdated(count: number) {
this.itemsShowCount = count;
this.itemsCountChange.emit(count);
}

onColumnsUpdated(colsNum: number) {
this.columnsCountChange.emit(colsNum);
}


onShowCategory(category: string) {
  this.showCategory.emit(category);
 }
clearCategory() {
  this.showCategory;
  this.showCategory.emit();
}

ngOnDestroy(): void {
  if(this.categoriesSubsciption) {
   this.categoriesSubsciption.unsubscribe();
  }
}
}
