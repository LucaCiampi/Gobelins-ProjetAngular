import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ImageModel } from '../../models/image.model';
import { ImageLikeButtonModel } from 'src/app/models/image-like-button.model';
import * as faker from 'faker';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css'],
})
export class ImageViewComponent implements OnInit {
  imageList: ImageModel[];

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.imageList = [
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12),
        likeButton: new ImageLikeButtonModel({
          icon: 'favorite_border',
          isLiked: false,
          maxLikes: 300
        })
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12),
        likeButton: new ImageLikeButtonModel({
          icon: 'favorite_border',
          isLiked: false,
          maxLikes: 300
        })
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12),
        likeButton: new ImageLikeButtonModel({
          icon: 'favorite_border',
          count: 63,
          isLiked: true,
          maxLikes: 300
        })
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12),
        likeButton: new ImageLikeButtonModel({
          icon: 'favorite_border',
          isLiked: false,
          maxLikes: 300
        })
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12),
        likeButton: new ImageLikeButtonModel({
          icon: 'favorite_border',
          isLiked: false,
          maxLikes: 300
        })
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12),
        likeButton: new ImageLikeButtonModel({
          icon: 'favorite_border',
          isLiked: false,
          maxLikes: 300
        })
      })
    ];
  }

  ngOnInit(): void {}
}
