
export class Estudiante {
    public dni: number;
    public nombre: string;
    public apellido: string;
    public curso: string;
    public division: string;
    public puntuacion: number;
    constructor(
        dni = null,
        nombre = '',
        apellido = '',
        curso = '',
        division = '',
        puntuacion = 0
    ) {
        this.dni = dni;
        this.nombre = nombre;        
        this.apellido = apellido;
        this.curso = curso;
        this.division = division;
        this.puntuacion = puntuacion;    
    }
}
