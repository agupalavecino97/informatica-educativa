import { Component, EventEmitter, Output,  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';



@Component({
  selector: 'app-moduloTeorico2',
  templateUrl: './moduloTeorico2.component.html',
})
export class ModuloTeorico2 {

  public url1;
  @Output() volver: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private  _sanitizer: DomSanitizer) {     
    var url = 'https://www.youtube.com/watch?v=7TMXvhjMMSE';
    var results1 = url.match('[\\?&]v=([^&#]*)');
    var video1 = (results1 === null) ? url : results1[1];
    this.url1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video1);

   }

   onClickVolver() {
      this.volver.emit(true);
   }

}
