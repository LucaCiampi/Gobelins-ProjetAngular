import { Component, OnInit } from '@angular/core';
import {ImageModel} from "../../models/image.model";
import * as faker from "faker";

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  imageList: ImageModel[];

  constructor() {
    this.imageList = [
      new ImageModel({
        imageUrl: faker.image.imageUrl(140, 140, undefined, true, true),
        title: faker.name.firstName(),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        imageUrl: faker.image.imageUrl(140, 140, undefined, true, true),
        title: faker.name.firstName(),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        imageUrl: faker.image.imageUrl(140, 140, undefined, true, true),
        title: faker.name.firstName(),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        imageUrl: faker.image.imageUrl(140, 140, undefined, true, true),
        title: faker.name.firstName(),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        imageUrl: faker.image.imageUrl(140, 140, undefined, true, true),
        title: faker.name.firstName(),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        imageUrl: faker.image.imageUrl(140, 140, undefined, true, true),
        title: faker.name.firstName(),
        text: faker.lorem.sentence(12)
      })
    ]
  }

  ngOnInit(): void {
  }

}
