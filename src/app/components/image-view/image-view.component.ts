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
      // new ImageModel({
      //   imageUrl: "../assets/img/placeholder-500x500.jpg",
      //   title: 'This is my title',
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // }),
      // new ImageModel({
      //   imageUrl: "../assets/img/placeholder-500x500.jpg",
      //   title: 'This is my title',
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // }),
      // new ImageModel({
      //   imageUrl: "../assets/img/placeholder-500x500.jpg",
      //   title: 'This is my title',
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // }),
      // new ImageModel({
      //   imageUrl: "../assets/img/placeholder-500x500.jpg",
      //   title: 'This is my title',
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // }),
      // new ImageModel({
      //   imageUrl: "../assets/img/placeholder-500x500.jpg",
      //   title: 'This is my title',
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // }),
      // new ImageModel({
      //   imageUrl: "../assets/img/placeholder-500x500.jpg",
      //   title: 'This is my title',
      //   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      // })
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
