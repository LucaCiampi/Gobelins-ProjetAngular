import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ImageLikeButtonModel } from '../../../../models/image-like-button.model';

@Component({
  selector: 'app-image-like-button',
  templateUrl: './image-like-button.component.html',
  styleUrls: ['./image-like-button.component.css'],
})
export class ImageLikeButtonComponent implements OnInit {
  // @Input() button: ImageLikeButtonModel
  amount: number;
  maxLikes = 990;
  isLiked = false;
  likeIcon = 'favorite_border';
  // @Input() likes:ImageLikeButtonModel;
  @ViewChild('likeBtn') likeBtn: any;

  constructor() {
    this.amount = Math.floor(Math.random() * (this.maxLikes + 1));
  }

  ngOnInit(): void {}

  toggleLike(): void {
    if (!this.isLiked) {
      this.likeIcon = 'favorite';
      this.amount += 1;
      this.likeBtn.color = 'warn';
    }
    else {
      this.likeIcon = 'favorite_border';
      this.amount -= 1;
      this.likeBtn.color = 'grey';
    }
    this.isLiked = !this.isLiked;
  }
}
