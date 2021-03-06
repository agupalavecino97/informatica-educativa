import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante.model'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';

const ELEMENT_DATA: any[] = [
  {uno: 'my', dos: 'mi/mis'},
  {uno: 'your', dos: 'tu/tus'},
  {uno: 'his', dos: 'su/sus'},
  {uno: 'her', dos: 'su/sus'},
  {uno: 'its', dos: 'su/sus'},
  {uno: 'our', dos: 'nuestro/a/os/as'},
  {uno: 'your', dos: 'vuestro/a/os/as'},
  {uno: 'their', dos: 'si/sus'},
 
];

@Component({
  selector: 'app-teoria',
  templateUrl: './teoria.component.html',
  styleUrls: ['./teoria.component.scss']
})
export class TeoriaComponent implements OnInit {

  public estudiante; 
  public modulo_actual: number;
  displayedColumns: string[] = ['uno', 'dos'];
  dataSource = ELEMENT_DATA;

  url1;
  url2;
  constructor(private _router: Router,private _estudianteService: EstudianteService, private _snackBar: MatSnackBar, private  _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this._estudianteService.estudiante.subscribe(
      res => {this.estudiante = res }
    );
    if (this.estudiante.nombre == ''){
      this._router.navigate(['/login']);
    }
    if (this.estudiante.puntuacion <50){
      this.modulo_actual = 1
    }else{
      this.modulo_actual = 2
    }
    var url1 = 'https://www.youtube.com/watch?v=faSrNM63k58';
    var results1 = url1.match('[\\?&]v=([^&#]*)');
    var video1 = (results1 === null) ? url1 : results1[1];
    this.url1 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video1)
    var url2 = 'https://www.youtube.com/watch?v=7TMXvhjMMSE';
    var results2 = url2.match('[\\?&]v=([^&#]*)');
    var video2 = (results2 === null) ? url2 : results2[1];
    this.url2 = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+video2)
  }

  verTeoria(num: number){
    this.modulo_actual = num;
    // if (num == 1){
    //     this.modulo_actual = 1;
    // }
    // else if (num == 2){
    //   if (this.estudiante.puntuacion >= 50){
    //     this.modulo_actual = 2;
    //   }else{
    //     this._snackBar.open('Para visualizar este m??dulo se necesita una puntuaci??n de 50 o m??s','OK');
    //   }
    // }
    // else if (num == 3){
    //   if (this.estudiante.puntuacion >= 100){
    //     this.modulo_actual = 3;
    //   }else{
    //     this._snackBar.open('Para visualizar este m??dulo se necesita una puntuaci??n de 100 o m??s','OK');
    //   }     
    // }
    // else if (num == 4){
    //   if (this.estudiante.puntuacion >= 150){
    //     this.modulo_actual = 4;
    //   }else{
    //     this._snackBar.open('Para visualizar este m??dulo se necesita una puntuaci??n de 150 o m??s','OK'); 
    //   }
    // }
    // else if (num == 5){
    //   if (this.estudiante.puntuacion >= 200){
    //     this.modulo_actual = 5;
    //   }else{
    //     this._snackBar.open('Para visualizar este m??dulo se necesita una puntuaci??n de 200 o m??s','OK'); 
    //   }
    // }
    // else if (num == 6){
    //   if (this.estudiante.puntuacion >= 250){
    //     this.modulo_actual = 6;
    //   }else{
    //     this._snackBar.open('Para visualizar este m??dulo se necesita una puntuaci??n de 250 o m??s','OK'); 
    //   }      
    // }
  }
  irEvaluacion(){
    this._router.navigate(['/evaluacion']);

  }

  logout(){
    this.estudiante = null;
    this._estudianteService.updateEstudiante(this.estudiante);
    this._router.navigate(['/login']);
  }
}
