import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../models/estudiante.model'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private _router: Router,private _estudianteService: EstudianteService, private _snackBar: MatSnackBar) { }

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
  }

  verTeoria(num: number){
    if (num == 1){
        this.modulo_actual = 1;
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
  irEvaluacion(){
    this._router.navigate(['/evaluacion']);

  }

  logout(){
    this.estudiante = null;
    this._estudianteService.updateEstudiante(this.estudiante);
    this._router.navigate(['/login']);
  }
}
