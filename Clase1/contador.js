class Contador {
    // atributos
    static CONTADOR_GLOBAL=0; // Es buena practica que las variables globales se declaren en mayusculas, y si es mas de una palabra, con guión bajo. Esta variable le pertenece a toda la clase, y no solamente a una instancia. 
    // constructor
    constructor(responsable){
        this.responsable = responsable;
        this.contadorResponsable = 0;
    }
    // metodos
    contar = () => {
        Contador.CONTADOR_GLOBAL ++;
        this.contadorResponsable ++;
    }
    getResponsable = () =>{ // va sin palabra function, sin const, sin nada
        return this.responsable;
    }
    getCuentaIndividual = () => {
        return this.contadorResponsable;
    }
    getCuentaGlobal = () => {
        return Contador.CONTADOR_GLOBAL;
    }   
}

module.exports = Contador;