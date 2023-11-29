import { Component} from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { IPost } from '../../Models/IPost';

@Component({
  selector: 'app-active-element',
  templateUrl: './active-element.component.html',
  styleUrl: './active-element.component.scss'
})
export class ActiveElementComponent {
  activePosts:IPost[]=[];
  allPosts:IPost[]=[];

  constructor(private postSvc:PostsService){}

  ngOnInit(){
    this.activePosts=this.postSvc.getActive();
  }
  toggleActive(post:IPost){
    this.postSvc.changeActive(post.id);
  }
}
