import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterPipe } from './filterpipe/filter.pipe';
import { FilteredProductsComponent } from './filtered-products/filtered-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    NavbarComponent,
    FilterPipe,
    FilteredProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
