import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

  public estudiante; 

  constructor(private _router: Router,private _estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this._estudianteService.estudiante.subscribe(
      data => {
        console.log(data);
        this.estudiante = data;}
    )
    if (this.estudiante.nombre == ''){
      this._router.navigate(['/login']);
    }
  }

  onClickTeoria() {
    this._router.navigate(['/teoria']);
  }

  onClickEvaluacion() {
    this._router.navigate(['/evaluacion']);
  }

  onClickPerfil() {
    this._router.navigate(['/perfil']);
  }

  logout(){
    this.estudiante = null;
    this._estudianteService.updateEstudiante(this.estudiante);
    this._router.navigate(['/login']);
  }
}
