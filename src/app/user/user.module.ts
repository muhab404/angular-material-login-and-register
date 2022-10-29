import { ProtectedModule } from './../protected/protected.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ProtectedModule,
    TranslateModule

  ]
})
export class UserModule { }
