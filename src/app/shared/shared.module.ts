import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    NgSelectModule
  ],
  declarations: [],
  exports: [
    NgSelectModule
  ]
})
export class SharedModule { }
