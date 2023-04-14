import { stringify } from '@angular/compiler/src/util';
// import { Component, Inject, OnInit } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavBarComponent implements OnInit {

  public estudiante: Estudiante; 

  constructor(private _router: Router,private _estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this._estudianteService.estudiante.subscribe(
      res => {this.estudiante = res }
    );
  }

  logout(){
    this.estudiante = new Estudiante();
    this._estudianteService.updateEstudiante(this.estudiante);
    this._router.navigate(['/login']);
  }

}
