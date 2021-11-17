import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: []
})
export class PerfilComponent implements OnInit {

  public estudiante; 
  constructor(private _router: Router,private _estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this._estudianteService.estudiante.subscribe(
      data => {
        console.log(data);
        this.estudiante = data;}
    )
    // this.estudiante = JSON.parse(localStorage.getItem('estudiante'));
    if (this.estudiante.nombre == ''){
      this._router.navigate(['login']);
    }
  }

}
