import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMedRoutingModule } from './search-med-routing.module';
import { SearchMedComponent } from './search-med.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [SearchMedComponent],
  imports: [
    CommonModule,
    MatInputModule,
    SearchMedRoutingModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  exports: [SearchMedComponent],
})
export class SearchMedModule {}
