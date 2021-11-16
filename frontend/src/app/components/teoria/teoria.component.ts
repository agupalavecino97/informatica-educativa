import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante.model'
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-teoria',
  templateUrl: './teoria.component.html',
  styleUrls: ['./teoria.component.scss']
})
export class TeoriaComponent implements OnInit {

  public estudiante; 
  public modulo_actual: number;
  constructor(private _router: Router,) { }

  ngOnInit(): void {
    this.estudiante = localStorage.getItem('estudiante')
    if (this.estudiante == '' || this.estudiante == null){
      this._router.navigate(['login']);
    }
    this.modulo_actual = 1
  }

  verTeoria(num: number){

  }
}
