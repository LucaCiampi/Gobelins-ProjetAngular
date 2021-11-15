import { Component, OnInit } from '@angular/core';
import { ImageModel } from '../../models/image.model';
import * as faker from 'faker';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css'],
})
export class ImageViewComponent implements OnInit {
  imageList: ImageModel[];

  constructor() {
    this.imageList = [
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12)
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12)
      })
    ];
  }

  ngOnInit(): void {}
}
