import { Component, OnInit,  } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Estudiante } from 'src/app/models/estudiante.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit{

  public datos: Array<any>;
  public displayedColumns: string[] = ['estudiante', 'evaluacion', 'fecha', 'correctas', 'incorrectas'];
  public estudiante: Estudiante;
  constructor( 
    private _router: Router, 
    private _estudianteService: EstudianteService, 
    private _snackBar: MatSnackBar 
  ) {     

  }

  ngOnInit(): void {

    this._estudianteService.estudiante.subscribe(
      res => {this.estudiante = res }
    );
    if (this.estudiante.nombre == ''){
      this._router.navigate(['/login']);
    }


   this.obtenerHistorial();
  }

  obtenerHistorial() {
    this.datos = new Array();
    this._estudianteService.obtenerHistorial().subscribe(
        response =>{
          if (response.message){ 
            this._snackBar.open(response.message, 'Ok'); 
          }else{
            this.datos = response.data;
          }
    });
  }

}
