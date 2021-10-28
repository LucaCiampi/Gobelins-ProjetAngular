import {Model} from "./interfaces/model";
import {ImageLikeButtonModel} from "./image-like-button.model";

export class ImageModel implements Model{
  readonly imageUrl: string;
  readonly title: string;
  readonly text: string;
  readonly isActive?: boolean;
  readonly button: ImageLikeButtonModel;

  constructor(input: Partial<ImageModel>) {
    this.imageUrl = input.imageUrl || '';
    this.title = input.title || '';
    this.text = input.text || '';
    this.isActive = input.isActive || false;
    this.button = new ImageLikeButtonModel(input.button || {});
  }
}
