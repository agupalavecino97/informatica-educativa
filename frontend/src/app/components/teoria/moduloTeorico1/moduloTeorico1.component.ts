import { Component, EventEmitter, Output,  } from '@angular/core';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

const ELEMENT_DATA: any[] = [
  {uno: 'my', dos: 'mi/mis'},
  {uno: 'your', dos: 'tu/tus'},
  {uno: 'his', dos: 'su/sus'},
  {uno: 'her', dos: 'su/sus'},
  {uno: 'its', dos: 'su/sus'},
  {uno: 'our', dos: 'nuestro/a/os/as'},
  {uno: 'your', dos: 'vuestro/a/os/as'},
  {uno: 'their', dos: 'su/sus'},
 
];

@Component({
  selector: 'app-moduloTeorico1',
  templateUrl: './moduloTeorico1.component.html',
  styleUrls: ['./moduloTeorico1.component.scss']
})
export class ModuloTeorico1 {

  public url1;
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['uno', 'dos'];
  @Output() volver: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private  _sanitizer: DomSanitizer) {     
    var url = 'https://www.youtube.com/watch?v=faSrNM63k58';
    var results1 = url.match('[\\?&]v=([^&#]*)');
    var video1 = (results1 === null) ? url : results1[1];
    this.url1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video1);

   }

   onClickVolver() {
      this.volver.emit(true);
   }

}
