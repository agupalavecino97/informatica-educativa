import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante.model';

export interface Datos {
  estudiante: Estudiante;
  correctas: number;
  incorrectas: number;
  codigoEvaluacion: number;
  respuestas: Array<string>
}

@Component({
  selector: 'app-moduloEvaluacion2',
  templateUrl: './moduloEvaluacion2.component.html',
})
export class ModuloEvaluacion2 {
  @Input() estudiante: Estudiante;
  @Output() actualizarEstudiante: EventEmitter<Datos> =
    new EventEmitter<Datos>();
  @Output() volver: EventEmitter<boolean> = new EventEmitter<boolean>();

  public input7: string;
  public input8: string;
  public input9: string;
  public input10: string;
  public input11: string;
  public input12: string;
  public input13: string;
  public radio1: string;
  public radio2: string;
  public radio3: string;
  public radio4: string;
  public respuestas = [];

  constructor() {}

  onClickVolver() {
    this.volver.emit(true);
  }

  ComprobarEvaluacion() {
    let puntaje = 0;
    let correctas = 0;
    let incorrectas = 0;
    if (this.input7 === 'I dont go to school everyday') {
      this.respuestas.push(
        'I dont go to school everyday - Correcta  '
      );
      puntaje += 10;
      correctas += 1;
    } else {
      this.respuestas.push(
        this.input7 + '- Incorrecta  '
      );
      incorrectas += 1;
    }
    if (this.input8 === 'Laura isnt very tired') {
      this.respuestas.push(
        'Laura isnt very tired - Correcta  '
      );
      puntaje += 10;
      correctas += 1;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input8 + '- Incorrecta  '
      );
    }
    if (this.input9 === 'My hobby isnt collecting stamps') {
      this.respuestas.push(
        'My hobby isnt collecting stamps - Correcta  '
      );
      puntaje += 10;
      correctas += 1;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input9 + '- Incorrecta  '
      );
    }
    if (this.input10 === 'Hugh doesnt have breakfast at seven') {
      this.respuestas.push(
        'Hugh doesnt have breakfast at seven - Correcta  '
      );
      puntaje += 10;
      correctas += 1;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input10 + '- Incorrecta  '
      );
    }
    if (this.input11 === 'Thomas and Nick dont play tennis all day') {
      this.respuestas.push(
        'Thomas and Nick dont play tennis all day - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push( this.input11 + '- Incorrecta  '
      );
    }
    if (this.input12 === 'The plane isnt full') {
      this.respuestas.push(
        'The plane isnt full - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input12 + ' - Incorrecta  '
      );
    }
    if (this.input13 === 'I dont read a lot of books') {
      this.respuestas.push(
        'I dont read a lot of books - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input13 + ' - Incorrecta  '
      );
    }
    if (this.radio1 == '1') {
      this.respuestas.push('Do you live in London? Yes, I do - Correcta  ');
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push('Do you live in London? Yes, I am - Incorrecta  ');
    }
    if (this.radio2 == '2') {
      this.respuestas.push( 'Does she usually go to the cinema? Yes, she do - Correcta  ');
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        'Does she usually go to the cinema? Yes, she does - Incorrecta  '
      );
    }
    if (this.radio3 == '1') {
      this.respuestas.push(
        'Where do you live? I live in Manchester - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push('Where do you live? Yes, I do - Incorrecta  ');
    }
    if (this.radio4 == '2') {
      correctas += 1;
      this.respuestas.push(
        'Does he always get up at seven? Yes, he does - Correcta  '
      );
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        'Does he always get up at seven? Yes, he do - Incorrecta  '
      );
    }
    let old_puntuacion = Number(this.estudiante.puntuacion);
    this.estudiante.puntuacion = old_puntuacion + puntaje;
    this.actualizarEstudiante.emit({
      estudiante: this.estudiante,
      correctas: correctas,
      incorrectas: incorrectas,
      codigoEvaluacion: 0,
      respuestas: this.respuestas
    });
  }
}
