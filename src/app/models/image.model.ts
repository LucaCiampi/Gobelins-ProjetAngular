import {Model} from "./interfaces/model";
import {ImageLikeButtonModel} from "./image-like-button.model";

export class ImageModel implements Model{
  readonly image: string;
  readonly name: string;
  readonly text: string;
  readonly isActive?: boolean;
  readonly button: ImageLikeButtonModel;

  constructor(input: Partial<ImageModel>) {
    this.image = input.image || '';
    this.name = input.name || '';
    this.text = input.text || '';
    this.isActive = input.isActive || false;
    this.button = new ImageLikeButtonModel(input.button || {});
  }
}
