import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cita } from 'src/app/shared/models/cita';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras | undefined

  fakeData=[
    {
      id:1,
      nombre:'jorge',
      descripcion:'descripcion',
      color:'#ff0000',
      duracion:'10',
      actividad:true,
      fechaCreacion:'01/02/2021',
      fechaEdicion:'01/02/2021'
    },
    {
      id:2,
      nombre:'jorge',
      descripcion:'descripcion',
      color:'#ff0000',
      duracion:'10',
      actividad:true,
      fechaCreacion:'01/02/2021',
      fechaEdicion:'01/02/2021'
    },
    {
      id:3,
      nombre:'jorge',
      descripcion:'descripcion',
      color:'#ff0000',
      duracion:'10',
      actividad:true,
      fechaCreacion:'01/02/2021',
      fechaEdicion:'01/02/2021'
    },
  ]

  constructor(private router : Router) {}

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
  ver(item:any):void{
    this.navigationExtras = {
      state: {
        value : item,
      }
    };
    this.router.navigate(['details'], this.navigationExtras);
  }
  eliminar(item:any):void{
    alert('Se ha borrado tu cita')
  }
  
}
