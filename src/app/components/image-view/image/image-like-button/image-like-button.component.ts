import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ImageLikeButtonModel } from '../../../../models/image-like-button.model';

@Component({
  selector: 'app-image-like-button',
  templateUrl: './image-like-button.component.html',
  styleUrls: ['./image-like-button.component.css'],
})
export class ImageLikeButtonComponent implements OnInit {
  @Input() likes!: ImageLikeButtonModel;
  @ViewChild('likeBtn') likeBtn!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    if (true === this.likes.isLiked) {
      this.likes.icon = 'favorite';
    }
  }

  toggleLike(): void {
    if (!this.likes.isLiked) {
      console.log(this.likeBtn)
      this.likes.icon = 'favorite';
      this.likes.count += 1;
      // this.likes.icon.color = 'warn';
    }
    else {
      console.log(this.likeBtn.nativeElement)
      this.likes.icon = 'favorite_border';
      this.likes.count -= 1;
      // this.likes.icon.color = 'grey';
    }
    this.likes.isLiked = !this.likes.isLiked;
  }
}
