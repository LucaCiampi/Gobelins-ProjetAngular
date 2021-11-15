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

  ngOnInit(): void { }

  toggleLike(): void {
    if (!this.likes.isLiked) {
      // console.log(this.likeBtn)
      // this.likeBtn.nativeElement.innerHTML = 'favorite'
      // this.likes.icon = 'favorite';
      // this.likes.count += 1;
      // this.likes.likeBtn.color = 'warn';
    }
    else {
      console.log(this.likeBtn.nativeElement)
      // this.likeBtn.nativeElement.innerHTML = 'favorite_border';
      // this.likes.icon = 'favorite_border';
      // this.likes.count -= 1;
      // this.likes.likeBtn.color = 'grey';
    }
    // this.likes.isLiked = !this.likes.isLiked;
  }
}
