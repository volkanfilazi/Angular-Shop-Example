import { Component } from '@angular/core';
import { NetworkingService } from '../service/networking.service';
import { Products } from '../interfaces/products'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchText = '';
  allProducts: Products[] = [];
  filteredProducts: Products[] = [];
  selectedProducts: Products[] = [];

  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]

  constructor(public networkingService: NetworkingService) {}

  ngOnInit(){
    this.networkingService.getAllProducts()
    this.updateFilteredProducts(); // Başlangıçta tüm ürünleri göstermek için çağırın.
  }
  updateFilteredProducts() {
    this.filteredProducts = this.networkingService.filterProducts(this.searchText);
  }

  selectedProduct(selectedItem: string){
    this.selectedProducts =  this.networkingService.selectedProductsBySearchbar(selectedItem)
    console.log(this.selectedProducts)
   }

}
