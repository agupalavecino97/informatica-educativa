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

  public estudiante: Estudiante; 
  public modulo_actual: number;
  public modulos = [1, 2, 3];
  public temas = ['Possessive Adjectives', 'Present Simple ', 'Present Continuous'];
  constructor(
      private _router: Router,
      private _estudianteService: EstudianteService, 
      private _snackBar: MatSnackBar, 
      private  _sanitizer: DomSanitizer) 
    {    
    this.estudiante = new Estudiante();
  }

  ngOnInit(): void {
    this._estudianteService.estudiante.subscribe(
      res => {this.estudiante = res }
    );
    if (this.estudiante.nombre == ''){
      this._router.navigate(['/login']);
    }
    this.modulo_actual = 0
  }

  verTeoria(num: number){
    this.modulo_actual = num;
  }

  onChangeMod(mod: number) {
    this.modulo_actual = mod;
  }

  irEvaluacion(){
    this._router.navigate(['/evaluacion']);

  }

  volver() {
    this.modulo_actual = 0;
  }

  logout(){
    this.estudiante = null;
    this._estudianteService.updateEstudiante(this.estudiante);
    this._router.navigate(['/login']);
  }
}
