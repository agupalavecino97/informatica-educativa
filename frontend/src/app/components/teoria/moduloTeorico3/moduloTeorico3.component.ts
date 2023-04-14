import { Component, EventEmitter, Output,  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

const ELEMENT_DATA: any[] = [
    {sujeto: 'I', auxiliar: 'am', verbo: 'talking, eating, learning, doing, going…'},
    {sujeto: 'He, She, It', auxiliar: 'is', verbo: 'talking, eating, learning, doing, going…'},
    {sujeto: 'you, we, they', auxiliar: 'are', verbo: 'talking , eating, learning, doing, going…'},
  ];
  

@Component({
  selector: 'app-moduloTeorico3',
  templateUrl: './moduloTeorico3.component.html',
})
export class ModuloTeorico3 {

  public url1;
  @Output() volver: EventEmitter<boolean> = new EventEmitter<boolean>();
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['sujeto', 'auxiliar', 'verbo'];

  constructor(private  _sanitizer: DomSanitizer) {     
    var url = 'https://www.youtube.com/watch?v=hfgni8tQl3o';
    var results1 = url.match('[\\?&]v=([^&#]*)');
    var video1 = (results1 === null) ? url : results1[1];
    this.url1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video1);

   }

   onClickVolver() {
      this.volver.emit(true);
   }

}