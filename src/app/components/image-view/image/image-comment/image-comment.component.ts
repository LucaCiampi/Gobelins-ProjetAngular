import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-comment',
  templateUrl: './image-comment.component.html',
  styleUrls: ['./image-comment.component.css'],
})
export class ImageCommentComponent implements OnInit {
  public commentCreated = false;
  public amount = 0;

  @ViewChild('comments') commentsTag: any;

  constructor() {}

  public createComment(event: any): void {
    if (event.target.value === '') return;
    let newComment = document.createElement('div');
    newComment.innerHTML = '<div class="my-1">' + event.target.value + '</div>';
    this.commentsTag.nativeElement.appendChild(newComment);
    this.commentCreated = true;
    this.amount += 1;
    event.target.value = '';
  }

  ngOnInit(): void {}
}
