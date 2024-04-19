import { Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
export const routes: Routes = [
{

  path: 'categories',
  //cargar con Lazyload el componente, ojo que el componente debe importarse por ""
  loadComponent: ()=> import ('./contact-list/contact-list.component')

},
{
  path: 'categories/new',
  loadComponent: ()=> import ('./category-form/category-form.component')
},

{
  path: 'categories/:id/edit',
  loadComponent: ()=> import ('./category-form/category-form.component')
},

];
