import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router) { }

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
