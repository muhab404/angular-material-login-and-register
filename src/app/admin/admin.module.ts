import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { ProtectedModule } from '../protected/protected.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AdminComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ProtectedModule,
    TranslateModule
  ]
})
export class AdminModule { }
