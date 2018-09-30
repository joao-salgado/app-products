import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ListProductsComponent
  ],
  exports: [
    ListProductsComponent
  ]
})
export class ProductsModule { }
