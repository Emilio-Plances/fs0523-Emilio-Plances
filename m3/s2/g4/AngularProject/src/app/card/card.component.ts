import { Component, Input} from '@angular/core';
import { IPost } from '../Models/IPost';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input () posts:IPost[]=[];
}
