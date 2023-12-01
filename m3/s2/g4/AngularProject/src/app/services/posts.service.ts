import { Injectable } from '@angular/core';
import { IPost } from '../Models/IPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts:IPost[]=[
    {
      "id":0,
      "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quae aspernatur ipsa harum magni atque necessitatibus esse officiis vero, architecto eveniet sed omnis quas error molestiae, natus beatae? Modi, consectetur.",
      "title":"lorem ipsum dolor sit",
      "active":true,
      "type": "news",
      "author":"Emanuele"
   },
   {
      "id":1,
      "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quae aspernatur ipsa harum magni atque necessitatibus esse officiis vero, architecto eveniet sed omnis quas error molestiae, natus beatae? Modi, consectetur.",
      "title":"lorem ipsum dolor sit",
      "active":true,
      "type": "education",
      "author":"Emanuele"
   },
   {
      "id":2,
      "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quae aspernatur ipsa harum magni atque necessitatibus esse officiis vero, architecto eveniet sed omnis quas error molestiae, natus beatae? Modi, consectetur.",
      "title":"lorem ipsum dolor sit",
      "active":true,
      "type": "news",
      "author":"Emilio"
   },
   {
      "id":3,
      "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quae aspernatur ipsa harum magni atque necessitatibus esse officiis vero, architecto eveniet sed omnis quas error molestiae, natus beatae? Modi, consectetur.",
      "title":"lorem ipsum dolor sit",
      "active":false,
      "type": "politic",
      "author":"Mauro"
   },
   {
      "id":4,
      "body":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quae aspernatur ipsa harum magni atque necessitatibus esse officiis vero, architecto eveniet sed omnis quas error molestiae, natus beatae? Modi, consectetur.",
      "title":"lorem ipsum dolor sit",
      "active":false,
      "type":  "education",
      "author":"Mauro"
   }
  ];

  ngOnInit() { }

  getAll(){
    return this.posts;
  }
  getActive() {
    return this.posts.filter(post=>post.active);
  }
  getInactive(){
    return this.posts.filter(post=>!post.active);
  }

  changeActive(index:number){
    this.posts[index].active=!this.posts[index].active
  }
}
