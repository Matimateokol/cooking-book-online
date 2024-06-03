import { Component } from '@angular/core';
import { PostDto } from "../../../core/api/models/post-dto";
import { PostControllerService } from "../../../core/api/services/post-controller.service";

@Component({
  selector: 'tasty-favourite-posts',
  templateUrl: './favourite-posts.component.html',
  styleUrls: ['./favourite-posts.component.scss']
})
export class FavouritePostsComponent {
  public _posts: PostDto[] = [];

  public constructor (
    private readonly _postControllerService: PostControllerService,
  ) {
    this._postControllerService.getPosts({ pageSize: 20 }).subscribe(data => {
     data.forEach(post => {
       if (post.isLikedByUser) {
         this._posts.push(post);
       }
     })
    })
  }
}
