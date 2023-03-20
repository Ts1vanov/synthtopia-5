import {MatSidenavModule} from '@angular/material/sidenav'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatMenuModule} from '@angular/material/menu'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatTableModule} from '@angular/material/table'
import { MatBadgeModule } from "@angular/material/badge";
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { MatFooterCell } from '@angular/material/table'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { CartService } from './services/cart.service'
import { StoreService } from './services/store.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductBoxComponent,
    FiltersComponent,
    ProductsHeaderComponent,
    CartComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CartService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
