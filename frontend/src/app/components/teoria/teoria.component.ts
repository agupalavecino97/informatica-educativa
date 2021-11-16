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
    this.estudiante = JSON.parse(localStorage.getItem('estudiante'));
    if (this.estudiante == '' || this.estudiante == null){
      this._router.navigate(['login']);
    }
    this.modulo_actual = 1
  }

  verTeoria(num: number){
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
