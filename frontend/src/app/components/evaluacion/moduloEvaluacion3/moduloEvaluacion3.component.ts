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
  selector: 'app-moduloEvaluacion3',
  templateUrl: './moduloEvaluacion3.component.html',
})
export class ModuloEvaluacion3 {
  @Input() estudiante: Estudiante;
  @Output() actualizarEstudiante: EventEmitter<Datos> =
    new EventEmitter<Datos>();
  @Output() volver: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  public respuestas = [];

  constructor() {}

  onClickVolver() {
    this.volver.emit(true);
  }

  ComprobarEvaluacion() {
    let puntaje = 0;
    let correctas = 0;
    let incorrectas = 0;
    if (this.input1 === 'They are not playing football now') {
      this.respuestas.push(
        'They are not playing football now - Correcta  '
      );
      puntaje += 10;
      correctas += 1;
    } else {
      this.respuestas.push(
        this.input1 + '- Incorrecta  '
      );
      incorrectas += 1;
    }
    if (this.input2 === 'We are currently looking for a new house') {
      this.respuestas.push(
        'We are currently looking for a new house - Correcta  '
      );
      puntaje += 10;
      correctas += 1;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input2 + '- Incorrecta  '
      );
    }
    if (this.input3 === 'Are you going to the game?') {
      this.respuestas.push(
        'Are you going to the game? - Correcta  '
      );
      puntaje += 10;
      correctas += 1;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input3 + '- Incorrecta  '
      );
    }
    if (this.input4 === 'I am doing my homework at the moment') {
      this.respuestas.push(
        'I am doing my homework at the moment - Correcta  '
      );
      puntaje += 10;
      correctas += 1;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input4 + '- Incorrecta  '
      );
    }
    if (this.input5 === 'Is he playing the guitar now?') {
      this.respuestas.push(
        'Is he playing the guitar now? - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push( this.input5 + '- Incorrecta  '
      );
    }
    if (this.input6 === 'It is raining so they are watching television') {
      this.respuestas.push(
        'It is raining so they are watching television - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input6 + ' - Incorrecta  '
      );
    }

    if (this.input7 === 'am working') {
      this.respuestas.push(
        'I am working now - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input7 + ' - Incorrecta  '
      );
    }

    if (this.input8=== 'is not watching') {
      this.respuestas.push(
        'Nell is not watching television at the moment - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input8 + ' - Incorrecta  '
      );
    }


    if (this.input9 === 'are going') {
      this.respuestas.push(
        'They are going to the cinema - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input9 + ' - Incorrecta  '
      );
    }


    if (this.input10 == 'is reading') {
      this.respuestas.push(
        'John is reading the newspaper - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input10 + ' - Incorrecta  '
      );
    }

    if (this.input11 == 'are not playing') {
      this.respuestas.push(
        'We are not playing video games - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input11 + ' - Incorrecta  '
      );
    }


    if (this.input12 === 'am not drinking') {
      this.respuestas.push(
        'I am not drinking water - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input12 + ' - Incorrecta  '
      );
    }


    if (this.input13 === 'know') {
      this.respuestas.push(
        'We know her - Correcta  '
      );
      correctas += 1;
      puntaje += 10;
    } else {
      incorrectas += 1;
      this.respuestas.push(
        this.input13 + ' - Incorrecta  '
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
