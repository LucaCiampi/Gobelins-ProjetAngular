import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ImageCommentModel } from 'src/app/models/image-comment.model';

@Component({
  selector: 'app-image-comment',
  templateUrl: './image-comment.component.html',
  styleUrls: ['./image-comment.component.css'],
})
export class ImageCommentComponent implements OnInit {
  @Input() comments!: ImageCommentModel;
  @ViewChild('commentsTag') commentsTag: any;
  
  public amount = 0;
  public dateToString = '';
  public commentCreated = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.comments);
    // this.amount = Object.keys(this.comments).length;
    if ('' != this.comments.text) {
      this.amount = 1;
    } 
    if (this.comments.datePosted) this.dateToString = '(' + this.comments.datePosted.toDateString() + ')';
  }

  public createComment(event: any): void {
    if (event.target.value === '') return;

    let newComment = document.createElement('div');
    let currentDate = new Date();
    newComment.innerHTML = '<div><span style="color: #f44336" class="image-comment-username">@CorentinWorkshop</span> ' + this.formatDate(currentDate) + '</div><div>' + event.target.value+ '</div>';
    this.commentsTag.nativeElement.appendChild(newComment);

    this.commentCreated = true;
    this.amount += 1;
    event.target.value = '';
  }

  public formatDate(dateToFormat: Date): string {
    return '(' + dateToFormat.toDateString() + ')'
  }
}
