import { Injectable } from '@angular/core'; // se podrá injectar esta clase en otras clases para poder usarla sin instanciar un objeto
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Estudiante } from '../models/estudiante.model';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Datos {
    estudiante: Estudiante,
    correctas: number,
    incorrectas: number,
    codigoEvaluacion: number,
} 

@Injectable() export class EstudianteService {
    public url: string;
    private _estudiante: BehaviorSubject<Estudiante> = new BehaviorSubject<Estudiante>(new Estudiante());
    private dataStore: { estudiante: Estudiante } = { estudiante: new Estudiante() }; // store our data in memory

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }


    constructor(
        private _http: HttpClient,
        
    ) {
        
        // this.url = 'https://informatica-educativa.herokuapp.com/api/estudiantes';
        this.url = 'https://informatica-educativa.onrender.com/api/estudiantes';
        // this.url = 'http://localhost:3785/api/estudiantes';
    }

    obtenerEstudiante(dni: string) {
        return this._http.get(this.url +'/obtenerDatos/'+dni, this.httpOptions)
        .pipe(map(res => {
            let response = JSON.parse(JSON.stringify(res))
            this.dataStore.estudiante = response;
            this._estudiante.next(Object.assign({}, this.dataStore).estudiante);
            return response
            }));
    }

    get estudiante():Observable<Estudiante>{
        return this._estudiante.asObservable();
    }
    updateEstudiante(estudiante:Estudiante){
        this.dataStore.estudiante = estudiante;
        this._estudiante.next(Object.assign({}, this.dataStore).estudiante);
    }

    actualizarEstudiante(datos: Datos) {
        let params = JSON.stringify({estudiante: datos.estudiante, correctas: datos.correctas, incorrectas: datos.incorrectas, codigoEvaluacion: datos.codigoEvaluacion}); //Parsea el objeto json en un srtring 
        return this._http.post(this.url + '/actualizar', params, this.httpOptions)
            .pipe(map(res =>{
                this.dataStore.estudiante = datos.estudiante;
                this._estudiante.next(Object.assign({}, this.dataStore).estudiante);
                return JSON.parse(JSON.stringify(res))
            } ));
    }

    obtenerHistorial() {
        return this._http.get(this.url + '/historial', this.httpOptions)
            .pipe(map(res =>{
                return JSON.parse(JSON.stringify(res))
            } ));
    }



}
