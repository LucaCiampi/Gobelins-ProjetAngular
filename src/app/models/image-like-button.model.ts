import {Model} from "./interfaces/model";

export class ImageLikeButtonModel implements Model {
  readonly icon: string;
  readonly count: number;
  readonly isLiked: boolean;
  readonly maxLikes: number;

  constructor(input: Partial<ImageLikeButtonModel>) {
    this.icon = input.icon || 'favorite_border';
    this.count = input.count || 10;
    this.isLiked = input.isLiked || false;
    this.maxLikes = input.maxLikes || 990;
  }
}
