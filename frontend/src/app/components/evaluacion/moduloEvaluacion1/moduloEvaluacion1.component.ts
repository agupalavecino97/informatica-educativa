import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante.model';

export interface Datos {
   estudiante: Estudiante,
   correctas: number,
   incorrectas: number,
   codigoEvaluacion: number,
   respuestas: Array<string>
} 

@Component({
  selector: 'app-moduloEvaluacion1',
  templateUrl: './moduloEvaluacion1.component.html'
})


export class ModuloEvaluacion1 {
  @Input() estudiante: Estudiante;
  @Output() actualizarEstudiante: EventEmitter<Datos> = new EventEmitter<Datos>();
  @Output() volver: EventEmitter<boolean> = new EventEmitter<boolean>();

  @ViewChild('firstname') firstname: ElementRef;
  
  public input1: string;
  public input2: string;
  public input3: string;
  public input4: string;
  public input5: string;
  public input6: string;
  public radio5: string;
  public radio6: string;
  public radio7: string;
  public radio8: string;
  public respuestas = [];

  constructor() {     }

   onClickVolver() {
      this.volver.emit(true);
      this.firstname.nativeElement.focus();
      this.firstname.nativeElement.click();
   }

   ComprobarEvaluacion(){
      let puntaje = 0;
      let correctas = 0;
      let incorrectas = 0;
      if (this.input1 === 'her'){
         this.respuestas.push('Maria lives in a flat. This is her flat - Correcta')
         puntaje += 10;
         correctas += 1;
      }else{
         this.respuestas.push( 'Maria lives in a flat. This is '+ this.input1 +' flat - Incorrecta')
         incorrectas += 1;
      }
      if (this.input2 === 'my'){
         puntaje += 10;
         correctas += 1;
         this.respuestas.push( 'Today its my birthday |  Correcta')
      }else{
         incorrectas += 1;
         this.respuestas.push( 'Today its '+ this.input2 +' birthday - Incorrecta  ')
      }
      if (this.input3 === 'his'){
         puntaje += 10;
         correctas += 1;
         this.respuestas.push( 'Paul dances with his girlfriend - Correcta  ')
      }else{
         incorrectas += 1;
         this.respuestas.push( 'Paul dances with '+ this.input3 +' girlfriend - Incorrecta  ')
      }
      if (this.input4 === 'our'){
         this.respuestas.push( 'We have a son. This is out son. - Correcta  ') 
         correctas += 1;
         puntaje += 10;
      }else{
         incorrectas += 1;
         this.respuestas.push( 'We have a son. This is '+ this.input4 +' son. - Incorrecta  ')
      }
      if (this.input5 === 'your'){
         this.respuestas.push( 'You work with your hands - Correcta  ')
         puntaje += 10;
         correctas += 1;
      }else{
         incorrectas += 1;
         this.respuestas.push( 'You work with '+ this.input5 +' hands - Incorrecta  ')
      }
      if (this.input6 === 'gis'){
         this.respuestas.push( 'His glasses are black - Correcta  ')
         puntaje += 10;
         correctas += 1;
      }else{
         incorrectas += 1;
         this.respuestas.push( this.input6 +' glasses are black - Incorrecta  ')
      }
      if (this.radio5 == "2"){
         this.respuestas.push( 'Are you married?. Yes, I am - Correcta  ')
         puntaje += 10;
         correctas += 1;
      }else{
         incorrectas += 1;
         this.respuestas.push( 'Are you married? Yes, I do - Incorrecta  ')
      }
      if (this.radio6 == "2"){
         this.respuestas.push( 'Do you have any brothers or sisters? I have two brothers - Correcta  ')
         correctas += 1;
         puntaje += 10;
      }else{
         incorrectas += 1;
         this.respuestas.push( 'Do you have any brothers or sisters? I have two sons - Incorrecta  ')
      }
      if (this.radio7 == "1"){
         this.respuestas.push( 'Is he your nephew? No, he isnt - Correcta  ')
         puntaje += 10;
         correctas += 1;
      }else{
         this.respuestas.push( 'Is he your nephew? No, he dont - Incorrecta  ')
         incorrectas += 1;
      }
      if (this.radio8 == "1"){
         this.respuestas.push( 'What does your wife do? Shes a housewife - Correcta  ')
         puntaje += 10;
         correctas += 1;
      }else{
         incorrectas += 1;
         this.respuestas.push( 'What does your wife do? Yes, she is - Incorrecta  ')
      }
      let old_puntuacion = Number(this.estudiante.puntuacion); 
      this.estudiante.puntuacion = old_puntuacion + puntaje;
      this.actualizarEstudiante.emit({estudiante: this.estudiante, correctas: correctas, incorrectas: incorrectas, codigoEvaluacion: 0, respuestas: this.respuestas});
    }

}
