import { Injectable } from '@angular/core';
import axios from 'axios';
import { Products } from '../interfaces/products'

@Injectable({
  providedIn: 'root'
})
export class NetworkingService {

  allProducts: Products[] = [];
  filteredProducts: Products[] = [];

  async getAllProducts() {
    try {
      let response = await axios.get<Products[]>(`https://fakestoreapi.com/products`);
      this.allProducts = response.data
     
      console.log(response.data);
      console.log(this.filteredProducts);
      
    } catch (error) {
      
    }
  }

  filterProducts(searchText: string): Products[] {
    if (!searchText) {
      return this.allProducts;
    }
    searchText = searchText.toLowerCase();
    return this.allProducts.filter(product => product.title.toLowerCase().includes(searchText));
  }

  selectedProductsBySearchbar(selectedItem: string): Products[]{
    return this.allProducts.filter(product => product.title.toLowerCase().includes(selectedItem));
  }
  
}
