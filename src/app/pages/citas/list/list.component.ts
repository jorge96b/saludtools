import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cita } from 'src/app/shared/models/cita';
import { CitasService } from '../citas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras | undefined

  listaCitas$ = this.citasService.citas;

  flag : boolean = false;

  constructor(private router : Router, private citasService: CitasService) {}

  ngOnInit(): void {
    if(this.listaCitas$!=undefined){
      this.listaCitas$.subscribe(event => {
        if(event.length > 0){
          this.flag = true
        }
      })
    }
  }

  editar(item:any):void{
    this.navigationExtras = {
      state: {
        value : item,
      }
    };
    this.router.navigate(['edit'], this.navigationExtras);
  }
  ver(item:any):void{
    this.navigationExtras = {
      state: {
        value : item,
      }
    };
    this.router.navigate(['details'], this.navigationExtras);
  }
  
  async eliminar(item: Cita): Promise<void> {
    try {
      alert('Eliminando cita');
      await this.citasService.onDeleteCitas(item);
    } catch (err) {
      console.log(err);
    }
  }
}

