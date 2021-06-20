import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { CitasFromsModule } from 'src/app/shared/components/citas-froms/citas-froms.module';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    CitasFromsModule
  ]
})
export class NewModule { }
