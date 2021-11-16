import { Injectable } from '@angular/core'; // se podrá injectar esta clase en otras clases para poder usarla sin instanciar un objeto
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from '../models/estudiante.model';
import { map } from 'rxjs/operators';
@Injectable() export class EstudianteService {
    public url: string;

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }


    constructor(
        private _http: HttpClient,
        
    ) {
        this.url = 'http://localhost:3785/api/estudiantes';
    }

    obtenerEstudiante(dni: string) {
        return this._http.get(this.url +'/'+dni, this.httpOptions)
        .pipe(map(res => {
            let response = JSON.stringify(res)
            console.log(response);
            localStorage.setItem('estudiante', response);
            return response
            }));
    }

    actualizarEstudiante(elem: Estudiante) {
        let params = JSON.stringify(elem); //Parsea el objeto json en un srtring 
        return this._http.post(this.url + 'actualizar', params, this.httpOptions)
            .pipe(map(res => JSON.parse(JSON.stringify(res))));
    }




}
