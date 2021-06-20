import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from '../../models/cita';

@Component({
  selector: 'app-citas-froms',
  templateUrl: './citas-froms.component.html',
  styleUrls: ['./citas-froms.component.scss']
})
export class CitasFromsComponent implements OnInit {

  cita : Cita | undefined;

  citasForm: FormGroup = this.fb.group({
    id: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    color: ['', [Validators.required]],
    duracion: ['', [Validators.required]],
    actividad: ['', [Validators.required]],
    fechaCreacion: ['', [Validators.required]],
    fechaEdicion: ['', [Validators.required]]
  }); ;

  constructor(private router: Router, private fb: FormBuilder) {
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
    console.log(this.cita);
  }

  ngOnInit(): void {
    if (typeof this.cita === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.citasForm.patchValue(this.cita);
    }
  }

  onSave(): void {
    console.log('Saved', this.citasForm.value);
    if (this.citasForm.valid) {
      this.citasForm.reset();
    }

  }
  volver(): void {
    this.router.navigate(['list']);
  }

}
