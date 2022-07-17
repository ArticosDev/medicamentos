import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { homedir } from 'os';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [


  {
  path: '',
  loadChildren: () => import('./search/search.module').then(mod => mod.SearchModule)
},
{
  path: 'search_recipe',
  loadChildren: () => import('./search/search.module').then(mod => mod.SearchModule)
},
{
  path: 'search_med',
  loadChildren: () => import('./search-med/search-med.module').then(mod => mod.SearchMedModule)
},


{
  path: 'create',
  loadChildren: () => import('./create/create.module').then(mod => mod.CreateModule)
},
{
  path: 'view',
  loadChildren: () => import('./view/view.module').then(mod => mod.ViewModule)
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicamentosRoutingModule { }
