import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { SearchModule } from '../search/search.module';
import { FooterModule } from '../shared/footer/footer.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SearchModule,
    CommonModule,
    NavbarModule,
    HomeRoutingModule,
    MatSliderModule,
    FooterModule
  ]
})
export class HomeModule { }
