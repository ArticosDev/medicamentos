import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchMedComponent } from './search-med.component';

const routes: Routes = [{
  path: '',
  component:SearchMedComponent,
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchMedRoutingModule { }
