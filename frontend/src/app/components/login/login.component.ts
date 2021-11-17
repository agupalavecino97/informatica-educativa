import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {
  
  public dni_ingresado: string;
  constructor(private _estudianteService: EstudianteService, private _router: Router,) { }

  ngOnInit(): void {
  }

  
  login(){ 
      // console.log(this.dni_ingresado)
      this._estudianteService.obtenerEstudiante(this.dni_ingresado).subscribe(
        response =>{
          console.log(response)
          if (response != null){
            this._router.navigate(['perfil']);
          }else{
            alert('dni inválido')
            this.dni_ingresado = null;
          }
      });
  }  

}
