import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitasService } from 'src/app/pages/citas/citas.service';
import { Cita } from '../../models/cita';
@Component({
  selector: 'app-citas-froms',
  templateUrl: './citas-froms.component.html',
  styleUrls: ['./citas-froms.component.scss']
})
export class CitasFromsComponent implements OnInit {

  cita : Cita | undefined;
  color:any;

  citasForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    color: [''],
    duracion: ['', [Validators.required]],
    actividad: [''],
    fechaCreacion: [''],
    fechaEdicion: ['']
  }); ;

  constructor(private router: Router, private fb: FormBuilder, private citasService: CitasService,private readonly afs: AngularFirestore) {
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
    console.log(this.cita);
  }

  ngOnInit(): void {
    if (typeof this.cita === 'undefined') {
      this.router.navigate(['new']);
    } else {
      this.color = this.cita.color;
      this.citasForm.patchValue(this.cita);
    }
  }


  onSave(): void {
    console.log(this.citasForm);
    if (this.citasForm.valid) {
      this.cita?.fechaCreacion  || this.citasForm.controls['fechaCreacion'].setValue(new Date());
      this.citasForm.controls['fechaEdicion'].setValue(new Date());
      this.citasForm.controls['color'].setValue(this.color);
      const cita = this.citasForm.value;
      const citaId = this.cita?.id || null;
      this.cita?.color || this.citasForm.controls['color'].setValue(this.color);
      this.citasService.onSaveEmployee(cita, citaId);
      this.citasForm.reset();
      this.router.navigate(['list']);
    }else{
      alert("Debes completar el formulario");
    }
  }
  volver(): void {
    this.router.navigate(['list']);
  }

  isValidField(field: string): string {
    const validatedField = this.citasForm.get(field)
    if(validatedField!=null){
      return (!validatedField.valid && validatedField.touched)
      ? 'is-invalid' : validatedField.touched ? 'is-valid' : '';
    }
    return "is-invalid";
  }

}
