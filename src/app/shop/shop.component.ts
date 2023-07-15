import { Component } from '@angular/core';
import { NetworkingService } from '../service/networking.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  constructor(private networkingService: NetworkingService){}

  ngOnInit(){
    this.networkingService.getAllProducts()
  }

  get allProducts() {
    return this.networkingService.allProducts
  }
}
