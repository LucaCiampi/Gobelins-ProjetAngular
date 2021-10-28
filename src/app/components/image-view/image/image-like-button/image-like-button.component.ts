import {Component, Input, OnInit} from '@angular/core';
import {ImageLikeButtonModel} from "../../../../models/image-like-button.model";

@Component({
  selector: 'app-image-like-button',
  templateUrl: './image-like-button.component.html',
  styleUrls: ['./image-like-button.component.css']
})
export class ImageLikeButtonComponent implements OnInit {

  // @Input() button: ImageLikeButtonModel
  amount: number;
  maxLikes = 30;
  isDisabled = false;

  constructor() {
    this.amount = Math.floor(Math.random() * (this.maxLikes + 1));
  }

  ngOnInit(): void {
  }

  addLike(): void {
    this.isDisabled = true;
    this.amount += 1;
  }

}
