
import Cl_estudiante from "./Cl_estudante.js";

export default class Cl_becado extends Cl_estudiante{
    constructor(nombre, acumNotas, cantMaterias,beca) {
        super(nombre, acumNotas, cantMaterias),
        this.sbeca = beca;
    }
    
   set beca (beca) {    
    return this._beca = + beca
    }

    get beca () {
        return this._beca
    }

    montoBeca() {
        if (super.promedio() >= 15) {
            return 30
        } else if (super.promedio() >= 10) {
            return  20
        } else {
            return 0
        }
    }
}
