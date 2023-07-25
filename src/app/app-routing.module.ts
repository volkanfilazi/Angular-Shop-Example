import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilteredProductsComponent } from './filtered-products/filtered-products.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', component: ShopComponent},
  { path: 'filtered', component: FilteredProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
