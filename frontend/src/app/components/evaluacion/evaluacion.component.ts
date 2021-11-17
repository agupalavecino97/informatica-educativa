import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss'],
  providers: []
})
export class EvaluacionComponent implements OnInit {

  public estudiante; 
  public modulo_actual: number;
  public input1: string;
  public input2: string;
  public input3: string;
  public input4: string;
  public input5: string;
  public input6: string;

  constructor(private _router: Router,private _estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this._estudianteService.estudiante.subscribe(
      res => {this.estudiante = res }
    );
    if (this.estudiante.nombre == ''){
      this._router.navigate(['login']);
    }
    this.modulo_actual = 1;
    console.log(this.estudiante);
  }

  verEvaluacion(num: Number){
    if (num == 1){
      this.modulo_actual = 1;
  }
  else if (num == 2){
    if (this.estudiante.puntuacion >= 40){
      this.modulo_actual = 2;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 40 o más')
    }
  }
  else if (num == 3){
    if (this.estudiante.puntuacion >= 80){
      this.modulo_actual = 3;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 80 o más')
    }     
  }
  else if (num == 4){
    if (this.estudiante.puntuacion >= 150){
      this.modulo_actual = 4;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 150 o más')
    }
  }
  else if (num == 5){
    if (this.estudiante.puntuacion >= 190){
      this.modulo_actual = 5;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 190 o más')     
    }
  }
  else if (num == 6){
    if (this.estudiante.puntuacion >= 230){
      this.modulo_actual = 6;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 230 o más')
    }      
  }
}
ComprobarEvaluacion(num: number){
  var puntaje = 0
  if (num == 1){
    if (this.input1 === 'her'){
      puntaje += 10;
    }
    if (this.input2 === 'my'){
      puntaje += 10;
    }
    if (this.input3 === 'his'){
      puntaje += 10;
    }
    if (this.input4 === 'our'){
      puntaje += 10;
    }
    if (this.input5 === 'your'){
      puntaje += 10;
    }
    if (this.input6 === 'they'){
      puntaje += 10;
    }
    let estudiante ={
        'dni': this.estudiante,
    }
    let old_puntuacion = Number(this.estudiante.puntuacion); 
    this.estudiante.puntuacion = stringify(old_puntuacion + puntaje);
    this._estudianteService.actualizarEstudiante(this.estudiante).subscribe(
      response =>{
        if (response.message){
          alert(response.message)
          this._router.navigate(['perfil']);
        }else{
          alert('error')
        }
      });
    
  }
}
}
