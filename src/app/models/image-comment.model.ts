import {Model} from "./interfaces/model";

export class ImageCommentModel implements Model {
  readonly icon: string;
  readonly count: number;

  constructor(input: Partial<ImageCommentModel>) {
    this.icon = input.icon || '';
    this.count = input.count || 0;
  }
}