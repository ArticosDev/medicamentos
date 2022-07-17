import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    SearchRoutingModule,
    MatButtonModule
  ],
  exports:[SearchComponent]
})
export class SearchModule { }
