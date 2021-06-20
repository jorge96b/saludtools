import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cita } from 'src/app/shared/models/cita';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  cita : Cita;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
  }

  editar(): void {
    this.router.navigate(['edit']);
  }

  async eliminar(): Promise<void> {
    try {
      alert('Deleted');
      this.volver();
    } catch (err) {
      console.log(err);
    }
  }

  volver(): void {
    this.router.navigate(['list']);
  }

}
