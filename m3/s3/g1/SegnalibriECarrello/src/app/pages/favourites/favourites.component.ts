import { Component } from '@angular/core';
import { IProduct } from '../../Modules/iproduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {
  productsArr:IProduct[]=[];

  constructor(private productsSVC:ProductsService){}

  ngOnInit(){
    this.productsSVC.favourites$.subscribe(res=>this.productsArr=res)
  }
}
