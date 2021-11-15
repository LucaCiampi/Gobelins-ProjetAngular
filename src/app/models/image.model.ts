import {Model} from "./interfaces/model";
import {ImageLikeButtonModel} from "./image-like-button.model";
import {ImageCommentModel} from "./image-comment.model";

export class ImageModel implements Model{
  readonly imageUrl: string;
  readonly profilePhotoUrl: string;
  readonly username: string;
  readonly title: string;
  readonly text: string;
  readonly isActive?: boolean;
  readonly likeButton: ImageLikeButtonModel;
  readonly comments: ImageCommentModel;

  constructor(input: Partial<ImageModel>) {
    this.imageUrl = input.imageUrl || '';
    this.profilePhotoUrl = input.profilePhotoUrl || '';
    this.username = input.username || 'username';
    this.title = input.title || '';
    this.text = input.text || '';
    this.isActive = input.isActive || false;
    this.likeButton = new ImageLikeButtonModel(input.likeButton || {});
    this.comments = new ImageCommentModel(input.comments || {});
  }
}
