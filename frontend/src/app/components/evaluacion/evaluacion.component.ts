import { stringify } from '@angular/compiler/src/util';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

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
  public msg: String;
  public respuestas = [];
  public revision: boolean;
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

  constructor(private _router: Router,private _estudianteService: EstudianteService, 
    private _snackBar: MatSnackBar, public dialog: MatDialog) { }

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
    this.msg = '';
    this.revision = false;
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
      this._snackBar.open('Para visualizar este módulo se necesita una puntuación de 50 o más','OK'); 
    }
  }
  else if (num == 3){
    if (this.estudiante.puntuacion >= 100){
      this.modulo_actual = 3;
    }else{
      this._snackBar.open('Para visualizar este módulo se necesita una puntuación de 100 o más','OK'); 
    }     
  }
  else if (num == 4){
    if (this.estudiante.puntuacion >= 150){
      this.modulo_actual = 4;
    }else{
      this._snackBar.open('Para visualizar este módulo se necesita una puntuación de 150 o más','OK'); 
    }
  }
  else if (num == 5){
    if (this.estudiante.puntuacion >= 200){
      this.modulo_actual = 5;
    }else{
      this._snackBar.open('Para visualizar este módulo se necesita una puntuación de 200 o más','OK'); 
    }
  }
  else if (num == 6){
    if (this.estudiante.puntuacion >= 250){
      this.modulo_actual = 6;
    }else{
      this._snackBar.open('Para visualizar este módulo se necesita una puntuación de 250 o más','OK'); 
    }      
  }
}
ComprobarEvaluacion(num: number){
  var puntaje = 0
  if (num == 1){
    if (this.input1 === 'her'){
      this.respuestas.push('Maria lives in a flat. This is her flat - Correcta')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Maria lives in a flat. This is '+ this.input1 +'her flat - Incorrecta')
    }
    if (this.input2 === 'my'){
      puntaje += 10;
       this.respuestas.push( 'Today its my birthday - Correcta')
    }else{
       this.respuestas.push( 'Today its'+ this.input2 +' birthday - Incorrecta  ')
    }
    if (this.input3 === 'his'){
      puntaje += 10;
       this.respuestas.push( 'Paul dances with his girlfriend - Correcta  ')
    }else{
       this.respuestas.push( 'Paul dances with'+ this.input3 +' girlfriend - Incorrecta  ')
    }
    if (this.input4 === 'our'){
       this.respuestas.push( 'We have a son. This is out son. - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'We have a son. This is'+ this.input4 +' son. - Incorrecta  ')
    }
    if (this.input5 === 'your'){
       this.respuestas.push( 'You work with your hands - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'You work with'+ this.input5 +' hands - Incorrecta  ')
    }
    if (this.input6 === 'they'){
       this.respuestas.push( 'They glasses are black - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( this.input6 +' glasses are black - Incorrecta  ')
    }
    if (this.radio5 == "2"){
       this.respuestas.push( 'Are you married?. Yes, I am. - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Are you married? Yes, I do - Incorrecta  ')
    }
    if (this.radio6 == "2"){
       this.respuestas.push( 'Do you have any brothers or sisters? I have two brothers - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Do you have any brothers or sisters? I have two sons. - Incorrecta  ')
    }
    if (this.radio7 == "1"){
       this.respuestas.push( 'Is he your nephew? No, he isnt. - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Is he your nephew? No, he dont - Incorrecta  ')
    }
    if (this.radio8 == "1"){
       this.respuestas.push( 'What does your wife do? Shes a housewife - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'What does your wife do? Yes, she is - Incorrecta  ')
    }
    let old_puntuacion = Number(this.estudiante.puntuacion); 
    this.estudiante.puntuacion = stringify(old_puntuacion + puntaje);
    this._estudianteService.actualizarEstudiante(this.estudiante).subscribe(
      response =>{
        if (response.message){ 
          this._snackBar.open(response.message, 'Ok'); 
          this.revision = true;
          this.modulo_actual = 0;
          // this._router.navigate(['/perfil']);
        }else{
          response.message
        this._snackBar.open('Error','OK'); 
        }
      });
    
  }
  else if (num == 2){
    if (this.input7 === 'I dont go to school everyday'){
       this.respuestas.push( 'I go to school everyday - I dont go to school everyday - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'I go to school everyday -'+ this.input7 +'- Incorrecta  ')
    }
    if (this.input8 === 'Laura isnt very tired'){
       this.respuestas.push( 'Laura is very tired - Laura isnt very tired - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Laura is very tired -'+ this.input8 +'- Incorrecta  ')
    }
    if (this.input9 === 'My hobby isnt collecting stamps'){
       this.respuestas.push( 'My hobby is collecting stamps - My hobby isnt collecting stamps - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'My hobby is collecting stamps - '+ this.input9 +'- Incorrecta  ')
    }
    if (this.input10 === 'Hugh doesnt have breakfast at seven'){
       this.respuestas.push( 'Hugh has breakfast at seven - Hugh doesnt have breakfast at seven - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Hugh has breakfast at seven - '+ this.input10 +'- Incorrecta  ')
    }
    if (this.input11 === 'Thomas and Nick dont play tennis all day'){
       this.respuestas.push( 'Thomas and Nick play tennis all day - Thomas and Nick dont play tennis all day - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Thomas and Nick play tennis all day -'+ this.input11 +'- Incorrecta  ')
    }
    if (this.input12 === 'The plane isnt full'){
       this.respuestas.push( 'The plane is full - The plane isnt full - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'The plane is full -'+ this.input12 +' - Incorrecta  ')
    }
    if (this.input13 === 'I dont read a lot of books'){
       this.respuestas.push( 'I read a lot of books - I dont read a lot of books - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'I read a lot of books - '+ this.input13 +' - Incorrecta  ')
    }
    if (this.radio1 == "1"){
       this.respuestas.push( 'Do you live in London? Yes, I do - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Do you live in London? Yes, I am - Incorrecta  ')
    }
    if (this.radio2 == "2"){
       this.respuestas.push( 'Does she usually go to the cinema? Yes, she do. - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Does she usually go to the cinema? Yes, she does. - Incorrecta  ')
    }
    if (this.radio3 == "1"){
       this.respuestas.push( 'Where do you live? I live in Manchester - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push( 'Where do you live? Yes, I do - Incorrecta  ')
    }
    if (this.radio4 == "2"){
       this.respuestas.push( 'Does he always get up at seven? Yes, he does - Correcta  ')
      puntaje += 10;
    }else{
       this.respuestas.push('Does he always get up at seven? Yes, he do - Incorrecta  ')
    }
    let old_puntuacion = Number(this.estudiante.puntuacion); 
    this.estudiante.puntuacion = stringify(old_puntuacion + puntaje);
    this._estudianteService.actualizarEstudiante(this.estudiante).subscribe(
      response =>{
        if (response.message){
          this._snackBar.open(response.message,'OK'); 
          this.revision = true;
          this.modulo_actual = 0;
          // this._router.navigate(['/perfil']);
        }else{
        this._snackBar.open('Error','OK'); 
        }
      });
  }
}
  logout(){
    this.estudiante = new Estudiante();
    this._estudianteService.updateEstudiante(this.estudiante);
    this._router.navigate(['/login']);

  }
  irPerfil(){
    this._router.navigate(['/perfil']);
  }
}

