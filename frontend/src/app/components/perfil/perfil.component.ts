import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  public estudiante; 
  constructor(private _router: Router,) { }

  ngOnInit(): void {
    this.estudiante = JSON.parse(localStorage.getItem('estudiante'));
    console.log(this.estudiante);
    if (this.estudiante == '' || this.estudiante == null){
      this._router.navigate(['login']);
    }
  }

}
