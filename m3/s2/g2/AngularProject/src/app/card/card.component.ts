import { Component } from '@angular/core';
import { IPost } from '../Models/IPost';

@Component({
  selector: '.app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  post:IPost={
    id : 0,
    body: 'ciao',
    title: 'welcome',
    active: false
  }
}
