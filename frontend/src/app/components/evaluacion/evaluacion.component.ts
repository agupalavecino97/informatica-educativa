import { stringify } from '@angular/compiler/src/util';
// import { Component, Inject, OnInit } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';

export interface Datos {
  estudiante: Estudiante,
  correctas: number,
  incorrectas: number,
  codigoEvaluacion: number,
  respuestas: Array<string>
} 
@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss'],
  providers: []
})

export class EvaluacionComponent implements OnInit {

  public estudiante: Estudiante; 
  public modulo_actual: number = 0;
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
  public input14: string;
  public input15: string;
  public radio1: string;
  public radio2: string;
  public radio3: string;
  public radio4: string;
 
  public msg: String;
  public respuestas = [];
  public revision: boolean;
  public words = ['cows', 'tracks', 'arrived', 'located', 'sir', 'seat',
  'division', 'effect', 'underline', 'view', 'annual',
  'anniversary', 'centennial', 'millennium', 'perennial',
  'artisan', 'apprentice', 'meteorologist', 'blizzard', 'tornado',
  'intensify','speed','count','consonant','someone',
  'sail','rolled','bear','wonder','smiled','angle', 'absent',
  'decadent', 'excellent', 'frequent', 'impatient', 'cell',
  'cytoplasm', 'organelle', 'diffusion', 'osmosis',
  'respiration'
  ];
  public modulos = [1, 2, 3];
  public temas = ['Possessive Adjectives', 'Present Simple ', 'Present Continuous'];

  constructor(private _router: Router,private _estudianteService: EstudianteService, 
    private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._estudianteService.estudiante.subscribe(
      res => {this.estudiante = res }
    );
    this.modulo_actual = 0;
    if (this.estudiante.nombre == ''){
      this._router.navigate(['/login']);
    }
    this.msg = '';
    this.revision = false;
  }


onChangeMod(mod: number) {
  this.modulo_actual = mod;
}


actualizarEstudiante(datos: Datos) {
  datos.codigoEvaluacion = this.modulo_actual;
  this.respuestas = datos.respuestas;
  this._estudianteService.actualizarEstudiante(datos).subscribe(
      response =>{
        if (response.message){ 
          this._snackBar.open(response.message, 'Ok'); 
          this.revision = true;
          this.modulo_actual = 0;
        }else{
          response.message
        this._snackBar.open('Error','OK'); 
        }
   });
}

  logout(){
    this.estudiante = new Estudiante();
    this._estudianteService.updateEstudiante(this.estudiante);
    this._router.navigate(['/login']);
  }

  irPerfil(){
    this._router.navigate(['/perfil']);
  }

  volver() {
   this.revision = false;
   this.modulo_actual = 0;
   this.respuestas = [];
   }

}

