import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RdvRoutingModule } from './rdv-routing.module';

import { RdvComponent } from './rdv.component';
import { FormsModule }   from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';





@NgModule({
  imports: [
      RdvRoutingModule,
      FormsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatDividerModule,
      MatListModule,
      NzDatePickerModule
      
],
  declarations: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,]

})

export class RdvModule { }
