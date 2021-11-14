import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './image-view/image/image.component';
import { ImageViewComponent } from './image-view/image-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImageLikeButtonComponent } from './image-view/image/image-like-button/image-like-button.component';
import { ContactComponent } from './contact/contact.component';
import { WordsTruncaturePipe } from '../pipes/words-truncature.pipe';
import { MatButtonModule } from '@angular/material/button';
import { ImageCommentComponent } from './image-view/image/image-comment/image-comment.component';

@NgModule({
  declarations: [
    ImageViewComponent,
    ImageComponent,
    HeaderComponent,
    FooterComponent,
    ImageLikeButtonComponent,
    ContactComponent,
    WordsTruncaturePipe,
    ImageCommentComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    ImageViewComponent,
    ImageComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    WordsTruncaturePipe,
    ImageCommentComponent
  ],
})
export class SharedModule {}
