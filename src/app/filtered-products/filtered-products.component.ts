import { Component } from '@angular/core';
import { NetworkingService } from '../service/networking.service';
import { Products } from '../interfaces/products'

@Component({
  selector: 'app-filtered-products',
  templateUrl: './filtered-products.component.html',
  styleUrls: ['./filtered-products.component.css']
})
export class FilteredProductsComponent {
  selectedItem: string = ''
  selectedProducts: Products[] = [];
  constructor(public networkingService: NetworkingService){}

  ngOnInit(){
    this.filteredProducts()
  }

  filteredProducts(){
   this.selectedProducts =  this.networkingService.selectedProductsBySearchbar(this.selectedItem)
  }
}
