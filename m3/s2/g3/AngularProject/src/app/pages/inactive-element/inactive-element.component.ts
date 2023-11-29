import { Component } from '@angular/core';
import { IPost } from '../../Models/IPost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-inactive-element',
  templateUrl: './inactive-element.component.html',
  styleUrl: './inactive-element.component.scss'
})
export class InactiveElementComponent {
  inactivePosts:IPost[]=[];
  constructor(private postSvc:PostsService){}

  ngOnInit(){
    this.inactivePosts=this.postSvc.getInactive();
  }
  toggleActive(post:IPost){
    this.postSvc.changeActive(post.id);
  }
}
