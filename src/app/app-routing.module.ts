import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
  path: '',
  loadChildren: () => import('./medicamentos/medicamentos.module').then(mod => mod.MedicamentosModule),
}


];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
