import { Component } from '@angular/core';
import { PostControllerService } from "src/app/core/api/services/post-controller.service";
import { Router } from "@angular/router";
import { PostDto } from "../../core/api/models/post-dto";

@Component({
  selector: 'tasty-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  public _posts: PostDto[] = [];

  public constructor (
    private readonly _postControllerService: PostControllerService,
    private readonly _router: Router,
  ) {
    this._postControllerService.getPosts({ pageSize: 20 }).subscribe(data => {
      this._posts = data;
    })
  }
}
