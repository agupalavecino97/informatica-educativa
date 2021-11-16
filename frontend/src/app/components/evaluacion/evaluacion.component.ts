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
    if (num == 1){
      this.modulo_actual = 1;
  }
  else if (num == 2){
    if (this.estudiante.puntuacion >= 10){
      this.modulo_actual = 2;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 10 o más')
    }
  }
  else if (num == 3){
    if (this.estudiante.puntuacion >= 20){
      this.modulo_actual = 3;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 20 o más')
    }     
  }
  else if (num == 4){
    if (this.estudiante.puntuacion >= 30){
      this.modulo_actual = 4;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 30 o más')
    }
  }
  else if (num == 5){
    if (this.estudiante.puntuacion >= 40){
      this.modulo_actual = 5;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 40 o más')     
    }
  }
  else if (num == 6){
    if (this.estudiante.puntuacion >= 50){
      this.modulo_actual = 6;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 50 o más')
    }      
  }
}
  
}
