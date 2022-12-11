import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdvComponent } from './rdv.component';

const routes: Routes = [
  { path: '', component: RdvComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdvRoutingModule { }
