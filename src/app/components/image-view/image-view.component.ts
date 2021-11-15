import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ImageModel } from '../../models/image.model';
import { ImageLikeButtonModel } from 'src/app/models/image-like-button.model';
import * as faker from 'faker';
import { ImageCommentModel } from 'src/app/models/image-comment.model';

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
          isLiked: false,
          maxLikes: 300
        }),
        comments: new ImageCommentModel({
          text: "J'adore ta casquette !",
          username: "@JeanLouis-Marchais09",
          datePosted: new Date("2016-01-17T08:44:29+0100")
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
          maxLikes: 450
        })
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12),
        likeButton: new ImageLikeButtonModel({
          count: 63,
          isLiked: true
        }),
        comments: new ImageCommentModel({
          text: "Dommage pour le flou",
          username: "@Jakob_Lpp",
          datePosted: new Date("2021-05-12T11:34:49+0100")
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
          isLiked: true
        }),
        comments: new ImageCommentModel({
          text: "Nice picture :)",
          username: "@JamieDornanReal",
          datePosted: new Date("2020-12-25T14:22:22+0100")
        })
      }),
      new ImageModel({
        profilePhotoUrl: faker.image.imageUrl(40, 40, undefined, true, true),
        username: faker.internet.userName(),
        imageUrl: faker.image.imageUrl(320, 320, undefined, true, true),
        title: faker.lorem.sentence(2),
        text: faker.lorem.sentence(12),
        likeButton: new ImageLikeButtonModel({
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
          isLiked: true
        })
      })
    ];
  }

  ngOnInit(): void {}
}
