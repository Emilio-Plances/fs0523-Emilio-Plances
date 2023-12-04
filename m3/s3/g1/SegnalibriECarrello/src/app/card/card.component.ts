import { Component, Input } from '@angular/core';
import { IProduct } from '../Modules/iproduct';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!:IProduct
}
