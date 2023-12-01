import { Component, Input } from '@angular/core';
import { IPost } from '../../Models/IPost';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() post!:IPost;
}
