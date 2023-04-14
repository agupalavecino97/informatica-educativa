import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
})

export class ResultadoComponent implements OnInit {

    @Input() respuestas: Array<string>;
    @Output() volver: EventEmitter<boolean> = new EventEmitter<boolean>();

    displayedColumns: string[] = ['nro', 'respuesta', 'resultado'];
    dataSource;
    cantidadCorrectas: number = 0;
    cantidadIncorrectas: number = 0;
    constructor() { }

    ngOnInit(): void {
        let data = []
        let index = 0
        this.respuestas.map( elem => {
            data.push({'index': index + 1, 'respuesta': elem.split('-')[0], 'resultado': elem.split('-')[1] });
            index += 1
            elem.split('-')[1].includes('Correcta') ? this.cantidadCorrectas += 1 : this.cantidadIncorrectas += 1;
        })
        this.dataSource = data;
    }

    onClickVolver() {
        this.volver.emit(true);
    }

}
