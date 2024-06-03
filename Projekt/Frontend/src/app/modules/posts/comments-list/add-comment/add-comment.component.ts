import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../authentication/service/auth.service";
import { UserDto } from "../../../../core/api/models/user-dto";
import { PostDto } from "../../../../core/api/models/post-dto";
import { CommentControllerService } from "../../../../core/api/services/comment-controller.service";

@Component({
  selector: 'tasty-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent {
  @Input() public post: PostDto;
  @Output() public commentAdded: EventEmitter<boolean> = new EventEmitter();
  public commentForm = new FormGroup({
    comment: new FormControl('', Validators.required)
  });
  private user: UserDto;

  public constructor(
    private _authService: AuthService,
    private _commentControllerService: CommentControllerService,
  ) {
    this._authService.user$.subscribe(user => this.user = user!);
  }

  public addComment(): void {
    const date = new Date(Date.now()).toISOString();

    if (!this.commentForm.invalid) {
      this._commentControllerService.createComment({
        body: {
          authorId: this.user.id,
          content: this.commentForm.value.comment!,
          created: date,
          postId: this.post.postId,
        }
      }).subscribe(_ => {
        this.commentForm.reset();
        this.commentAdded.emit(true);
      })
    }
  }
}
