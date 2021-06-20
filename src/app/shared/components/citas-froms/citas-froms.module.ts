import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CitasFromsComponent } from './citas-froms.component';

@NgModule({
  declarations: [CitasFromsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[CitasFromsComponent]
})
export class CitasFromsModule { }
