import { Model } from "./interfaces/model";

export class ImageLikeButtonModel implements Model {
  icon: string;
  count: number;
  color?: string;
  isLiked: boolean;
  readonly maxLikes: number;

  constructor(input: Partial<ImageLikeButtonModel>) {
    this.icon = input.icon || 'favorite_border';
    this.color = input.color || 'grey';
    this.isLiked = input.isLiked || false;
    this.maxLikes = input.maxLikes || 990;
    this.count = input.count || Math.floor(Math.random() * (this.maxLikes - 1) + 1) || 10;
  }
}
