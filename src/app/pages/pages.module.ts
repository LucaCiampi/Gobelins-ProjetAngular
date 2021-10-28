import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module'

import {ErrorPageComponent} from './error-page/error-page.component';
import {ImagesPageComponent} from "./images-page/images-page.component";
import {FormPageComponent} from "./form-page/form-page.component";
import {SharedModule} from "../components/shared.module";

@NgModule({
  declarations: [
    ErrorPageComponent,
    ImagesPageComponent,
    FormPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
  ]
})
export class PagesModule {
}
