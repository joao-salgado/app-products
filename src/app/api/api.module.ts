import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { StackService } from './stack.service';
import { MarketService } from './market.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    ProductService,
    StackService,
    MarketService
  ]
})
export class ApiModule { }
