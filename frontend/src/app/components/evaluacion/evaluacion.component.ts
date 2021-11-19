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
  public input7: string;
  public input8: string;
  public input9: string;
  public input10: string;
  public input11: string;
  public input12: string;
  public input13: string;
  public input14: string;
  public input15: string;
  public radio1: string;
  public radio2: string;
  public radio3: string;
  public radio4: string;
  public radio5: string;
  public radio6: string;
  public radio7: string;
  public radio8: string;

  public words = ['cows', 'tracks', 'arrived', 'located', 'sir', 'seat',
  'division', 'effect', 'underline', 'view', 'annual',
  'anniversary', 'centennial', 'millennium', 'perennial',
  'artisan', 'apprentice', 'meteorologist', 'blizzard', 'tornado',
  'intensify','speed','count','consonant','someone',
  'sail','rolled','bear','wonder','smiled','angle', 'absent',
  'decadent', 'excellent', 'frequent', 'impatient', 'cell',
  'cytoplasm', 'organelle', 'diffusion', 'osmosis',
  'respiration'
  ];

  constructor(private _router: Router,private _estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this._estudianteService.estudiante.subscribe(
      res => {this.estudiante = res }
    );
    if (this.estudiante.nombre == ''){
      this._router.navigate(['/login']);
    }
    if (this.estudiante.puntuacion < 50){
      this.modulo_actual = 1;
    }else{
      this.modulo_actual = 2;
    }
  }

  verEvaluacion(num: Number){
  if (num == 1){
    if (this.estudiante.puntuacion < 50){
      this.modulo_actual = 1;
    }
  }
  else if (num == 2){
    if (this.estudiante.puntuacion >= 50){
      this.modulo_actual = 2;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 50 o más')
    }
  }
  else if (num == 3){
    if (this.estudiante.puntuacion >= 100){
      this.modulo_actual = 3;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 100 o más')
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
    if (this.estudiante.puntuacion >= 200){
      this.modulo_actual = 5;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 200 o más')     
    }
  }
  else if (num == 6){
    if (this.estudiante.puntuacion >= 250){
      this.modulo_actual = 6;
    }else{
      alert('Para visualizar este módulo se necesita una puntuación de 250 o más')
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
    if (this.radio5 == "2"){
      puntaje += 10;
    }
    if (this.radio6 == "2"){
      puntaje += 10;
    }
    if (this.radio7 == "1"){
      puntaje += 10;
    }
    if (this.radio8 == "1"){
      puntaje += 10;
    }
    let old_puntuacion = Number(this.estudiante.puntuacion); 
    this.estudiante.puntuacion = stringify(old_puntuacion + puntaje);
    this._estudianteService.actualizarEstudiante(this.estudiante).subscribe(
      response =>{
        if (response.message){
          alert(response.message)
          this._router.navigate(['/perfil']);
        }else{
          alert('error')
        }
      });
    
  }
  else if (num == 2){
    if (this.input7 === 'I dont go to school everyday'){
      puntaje += 10;
    }
    if (this.input8 === 'Laura isnt very tired'){
      puntaje += 10;
    }
    if (this.input9 === 'My hobby isnt collecting stamps'){
      puntaje += 10;
    }
    if (this.input10 === 'Hugh doesnt have breakfast at seven'){
      puntaje += 10;
    }
    if (this.input11 === 'Thomas and Nick dont play tennis all day'){
      puntaje += 10;
    }
    if (this.input12 === 'The plane isnt full'){
      puntaje += 10;
    }
    if (this.input13 === 'I dont read a lot of books'){
      puntaje += 10;
    }
    if (this.input14 === 'The children dont like ice cream'){
      puntaje += 10;
    }
    if (this.input15 === 'I dont love playing with the computer'){
      puntaje += 10;
    }
    if (this.radio1 == "1"){
      puntaje += 10;
    }
    if (this.radio2 == "2"){
      puntaje += 10;
    }
    if (this.radio3 == "1"){
      puntaje += 10;
    }
    if (this.radio4 == "2"){
      puntaje += 10;
    }
    let old_puntuacion = Number(this.estudiante.puntuacion); 
    this.estudiante.puntuacion = stringify(old_puntuacion + puntaje);
    this._estudianteService.actualizarEstudiante(this.estudiante).subscribe(
      response =>{
        if (response.message){
          alert(response.message)
          this._router.navigate(['/perfil']);
        }else{
          alert('error')
        }
      });
  }
}
  logout(){
    this.estudiante = null;
    this._estudianteService.actualizarEstudiante(this.estudiante).subscribe(
      response => {
          this._router.navigate(['/login']);
      }
    )

  }
}
