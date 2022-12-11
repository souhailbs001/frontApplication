import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { CreditListComponent } from './credit-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule }   from '@angular/forms';







@NgModule({
  imports: [
      FormsModule,
     
      NgxPaginationModule
      
      
],
  declarations: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,]

})

export class CreditListModule { }
