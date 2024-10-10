export default class Cl_estudiante {
    constructor (nombre, acumNotas, cantMaterias) {
        this.nombre = nombre   
        this.acumNotas = acumNotas
        this.cantMaterias = cantMaterias
    } 

set nombre (nombre) {
    return this._nombre = nombre
    }
get nombre () {
    return this._nombre
    }

    set acumNotas (acumNotas) {
    return this._acumNotas = +acumNotas

    }
get acumNotas () {
    return this._acumNotas
    }
set cantMaterias (cantMaterias) {
    return this._cantMaterias = +cantMaterias
    }
get cantMaterias () {
    return this._cantMaterias
    }

    promedio () {
        return this.acumNotas / this.cantMaterias
    }
} 