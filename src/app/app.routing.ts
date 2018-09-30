import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsComponent } from './pages/products/list-products/list-products.component';

const routes: Routes = [
  {
    path: 'products',
    component: ListProductsComponent
  },
  {
    path: '**',
    redirectTo: '/products'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
