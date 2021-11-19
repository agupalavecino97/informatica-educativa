import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: []
})
export class LoginComponent implements OnInit {
  
  public dni_ingresado: string;
  constructor(private _estudianteService: EstudianteService, private _router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  
  login(){ 
      // console.log(this.dni_ingresado)
      this._estudianteService.obtenerEstudiante(this.dni_ingresado).subscribe(
        response =>{
          console.log(response)
          if (response.message){
            this._snackBar.open('dni inválido','OK');
            this.dni_ingresado = null;
          }else{
            this._router.navigate(['/informacion']);
          }
      });
  }  

}
