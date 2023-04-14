import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: []
})
export class PerfilComponent implements OnInit {

  public estudiante; 
  constructor(private _router: Router,private _estudianteService: EstudianteService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._estudianteService.estudiante.subscribe(
      data => {
        this.estudiante = data;
      }
    )
    // this.estudiante = JSON.parse(localStorage.getItem('estudiante'));
    if (this.estudiante.nombre == ''){
      this._router.navigate(['/login']);
    }
  }

  logout(){
    this.estudiante = null;
    this._estudianteService.updateEstudiante(this.estudiante);
    this._router.navigate(['/login']);

  }

}
