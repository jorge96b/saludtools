import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  editar(item:any):void{
    this.router.navigate(['edit'])
  }
  ver(item:any):void{
    this.router.navigate(['details'])
  }
  eliminar(item:any):void{
    alert('Se ha borrado tu cita')
  }
  
}
