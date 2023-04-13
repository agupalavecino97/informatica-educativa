import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-moduloEvaluacion2',
  templateUrl: './moduloEvaluacion2.component.html'
})

export class ModuloEvaluacion2 {

  @Output() volver: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {     

   }

   onClickVolver() {
      this.volver.emit(true);
   }

}
