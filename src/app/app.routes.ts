/**
 * Created by ricomai on 8/30/17.
 */

import { CatalogBrowsingComponent } from './catalog-browsing/catalog-browsing.component';
import { ProductBrowsingComponent } from './product-browsing/product-browsing.component';
import { Routes, RouterModule } from '@angular/router';

const appRoute : Routes = [
  {
    path:'product/:id',
    component :ProductBrowsingComponent
  },
  {
    path:'catalog',
    component:CatalogBrowsingComponent
  },
  {
    path:'',
    redirectTo:'/catalog',
    pathMatch:'full'
  }
];

export const router = RouterModule.forRoot(appRoute);

