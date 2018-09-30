import { MarketService } from './../../../api/market.service';
import { StackService } from './../../../api/stack.service';
import { Component } from '@angular/core';

import { Product } from '../../../model/product/product.model';
import { ProductFilter } from './../../../model/product/product-filter.model';
import { Stack } from '../../../model/stack/stack.model';
import { Market } from '../../../model/market/market.mode';
import { ProductService } from '../../../api/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  public filter = new ProductFilter();

  public products: Array<Product>;

  public markets: any;
  public stacks: any;

  public stackOptions: Array<Stack>;
  public marketOptions: Array<Market>;

  constructor(private productService: ProductService,
              private stackService: StackService,
              private marketService: MarketService) {

    this.stackService.findAll()
    .subscribe(response => {
      this.stackOptions = response.content.map(item => ({ label: item.name, value: item.id.toString() }));
    });

    this.marketService.findAll()
    .subscribe(response => {
      this.marketOptions = response.content.map(item => ({ label: item.name, value: item.id.toString() }));
    });
  }

  public search(): void {
    this.filter.stacks = this.stacks && this.stacks.length ? this.stacks.map(item => (item.value)) : null;
    this.filter.markets = this.markets && this.markets.length ? this.markets.map(item => (item.value)) : null;

    this.productService.findByFilter(this.filter).subscribe(response => {
      this.products = response.content;
    });
  }

}
