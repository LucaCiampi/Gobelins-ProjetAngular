import {Model} from "./interfaces/model";

export class ImageCommentModel implements Model {
  readonly text: string;
  readonly username: string;
  readonly datePosted?: Date;

  constructor(input: Partial<ImageCommentModel>) {
    this.text = input.text || '';
    this.username = input.username || '';
    this.datePosted = input.datePosted || undefined;
  }
}