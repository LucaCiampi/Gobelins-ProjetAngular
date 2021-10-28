import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ImagesPageComponent} from './images-page/images-page.component';
import {FormPageComponent} from "./form-page/form-page.component";

const routes: Routes = [
  {
    path: '', // Chemin par défaut http://localhost:4200 ou serveur renvoie sur /home-page
    component: ImagesPageComponent
  },
  {
    path: 'home-page', // Correspond à http://localhost:4200/home-page
    component: ImagesPageComponent
  },
  {
    path: 'form-page', // Correspond à http://localhost:4200/form-page
    component: FormPageComponent
  },
  {
    path: '**', // Correspond à une page non répertoriée
    component: ErrorPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
