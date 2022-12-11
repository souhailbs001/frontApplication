import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RdvListComponent } from './rdv-list.component';


const routes: Routes = [
  { path: '', component: RdvListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdvRoutingModule { }
