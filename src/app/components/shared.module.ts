import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {ImageComponent} from "./image-view/image/image.component";
import {ImageViewComponent} from "./image-view/image-view.component";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImageLikeButtonComponent } from './image-view/image/image-like-button/image-like-button.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    ImageViewComponent,
    ImageComponent,
    HeaderComponent,
    FooterComponent,
    ImageLikeButtonComponent,
    ContactComponent
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
    FooterComponent,
    ContactComponent
  ]
})
export class SharedModule {
}
