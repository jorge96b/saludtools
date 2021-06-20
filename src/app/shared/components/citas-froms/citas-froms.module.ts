import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CitasFromsComponent } from './citas-froms.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [CitasFromsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ColorPickerModule
  ],
  exports:[CitasFromsComponent]
})
export class CitasFromsModule { }
