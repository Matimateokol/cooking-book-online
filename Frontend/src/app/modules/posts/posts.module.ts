import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { RouterModule, Routes } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { ReactiveFormsModule } from "@angular/forms";
import { PostDetailsComponent } from './post-details/post-details.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentComponent } from './comments-list/comment/comment.component';
import { AddCommentComponent } from './comments-list/add-comment/add-comment.component';
import { MatDividerModule } from "@angular/material/divider";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [{
  path: '',
  children: [
    {
      path: "",
      component: PostsComponent,
    },
    {
      path: ":id",
      component: PostDetailsComponent,
    }
  ]
}]

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent,
    CommentsListComponent,
    CommentComponent,
    AddCommentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    ReactiveFormsModule,
    MatDividerModule,
    SharedModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class PostsModule { }
