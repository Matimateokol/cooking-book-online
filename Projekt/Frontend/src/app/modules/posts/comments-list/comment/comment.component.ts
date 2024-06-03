import { Component, Input } from '@angular/core';
import { CommentDto } from "../../../../core/api/models/comment-dto";

@Component({
  selector: 'tasty-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() public comment: CommentDto;
}
