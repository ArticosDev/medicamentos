import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { NavbarComponent } from './navbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
