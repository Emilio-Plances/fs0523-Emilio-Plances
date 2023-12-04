import { Component } from '@angular/core';
import { IProduct } from '../../Modules/iproduct';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productsArr!:IProduct[];
  favouritesArr:IProduct[]=[];

  constructor(private productsSVC:ProductsService){}

  ngOnInit(){
    this.productsSVC.getAll().subscribe(res=>this.productsArr = res.products)
    this.productsSVC.favourites$.subscribe(res => {
      this.favouritesArr = res;
      console.log(this.favouritesArr)
    })
  }

  addFav(product:IProduct){
    this.productsSVC.favourites$.subscribe(val => {
      const newArr = [...val, product];
      this.productsSVC.newFavArr(newArr);
    })
  }
}
