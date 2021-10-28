import {Model} from "./interfaces/model";

export class ImageLikeButtonModel implements Model {
  readonly icon: string;
  readonly count: number;

  constructor(input: Partial<ImageLikeButtonModel>) {
    this.icon = input.icon || '';
    this.count = input.count || 0;
  }
}
