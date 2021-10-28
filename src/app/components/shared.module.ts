import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ImageComponent} from "./image/image.component";
import {ImageViewComponent} from "./image-view/image-view.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImageLikeButtonComponent } from './image/image-like-button/image-like-button.component';

@NgModule({
  declarations: [
    ImageViewComponent,
    ImageComponent,
    HeaderComponent,
    FooterComponent,
    ImageLikeButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ImageViewComponent,
    ImageComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule {
}
