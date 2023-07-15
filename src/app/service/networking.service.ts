import { Injectable } from '@angular/core';
import axios from 'axios';
import { Products } from '../interfaces/products'

@Injectable({
  providedIn: 'root'
})
export class NetworkingService {

  allProducts: Products[] = [];

  async getAllProducts() {
    try {
      let response = await axios.get<Products[]>(`https://fakestoreapi.com/products`);
      this.allProducts = response.data
      console.log(response.data);
      
    } catch (error) {
      
    }
  }
  constructor() { }
}
