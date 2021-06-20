import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cita } from 'src/app/shared/models/cita';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  navigationExtras: NavigationExtras | undefined

  cita : Cita;

  constructor(private router: Router, private citasService: CitasService) {
    const navigation = this.router.getCurrentNavigation();
    this.cita = navigation?.extras?.state?.value;
   }

  ngOnInit(): void {
  }

  editar(item:any):void{
    this.navigationExtras = {
      state: {
        value : item,
      }
    };
    this.router.navigate(['edit'], this.navigationExtras);
  }

  async eliminar(item: Cita): Promise<void> {
    try {
      alert('Eliminando cita');
      await this.citasService.onDeleteCitas(item);
      this.router.navigate(['list']);
    } catch (err) {
      console.log(err);
    }
  }

  volver(): void {
    this.router.navigate(['list']);
  }

}
