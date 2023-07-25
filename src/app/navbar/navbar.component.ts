import { Component } from '@angular/core';
import { NetworkingService } from '../service/networking.service';
import { Products } from '../interfaces/products'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchText = '';
  allProducts: Products[] = [];
  filteredProducts: Products[] = [];

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

  constructor(public networkingService: NetworkingService, private _router: Router) {}

  ngOnInit(){
    this.networkingService.getAllProducts()
    this.updateFilteredProducts(); 
  }
  updateFilteredProducts() {
    this.filteredProducts = this.networkingService.filterProducts(this.searchText);
  }

  navigateToHome(){
    this._router.navigate([''])
  }
  selectedProduct(selectedItem: string){
    let selectedProducts =  this.networkingService.selectedProductsBySearchbar(selectedItem)
    if(selectedProducts){
      this._router.navigate(['filtered'])
      this.searchText = ''
      console.log(selectedProducts)
    }
   }

}
