import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {

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
  verEvaluacion(num: Number){
    
  }
}
