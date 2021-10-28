import { Component, OnInit } from '@angular/core';
import {ImageModel} from "../../../models/image.model";
import * as faker from "faker";
import {ImageLikeButtonModel} from "../../../models/image-like-button.model";

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
