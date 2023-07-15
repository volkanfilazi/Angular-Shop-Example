import { Component } from '@angular/core';
import { NetworkingService } from '../service/networking.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  constructor(public networkingService: NetworkingService){}

  

}
