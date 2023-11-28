import { Injectable } from '@angular/core';
import { IPost } from '../Models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts:IPost[]=[
    {
      "id":1,
      "body":"lorem ipsum dolor sit am",
      "title":"lorem ipsum dolor sit",
      "active":true
   },
   {
      "id":2,
      "body":"lorem ipsum dolor sit am",
      "title":"lorem ipsum dolor sit",
      "active":true
   },
   {
      "id":3,
      "body":"lorem ipsum dolor sit am",
      "title":"lorem ipsum dolor sit",
      "active":true
   },
   {
      "id":4,
      "body":"lorem ipsum dolor sit am",
      "title":"lorem ipsum dolor sit",
      "active":false
   },
   {
      "id":5,
      "body":"lorem ipsum dolor sit am",
      "title":"lorem ipsum dolor sit",
      "active":false
   }
  ];

  ngOnInit() { }

  getActive() {
    return this.posts.filter(post=>post.active)
  }
  getInactive(){
    return this.posts.filter(post=>!post.active)
  }
}
