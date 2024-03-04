class Persona {
    constructor(nombre){
        this.nombre = nombre;
    }
    static ESPECIE = "humano";
    saludar = () => {
        console.log(`Hola, soy ${this.nombre}, mucho gusto!`);
    }
    getEspecie = () => {
        console.log(`Aunque no lo creas, soy un ${Persona.ESPECIE}`);
    }
}

let persona1 = new Persona("Jorge");
let persona2 = new Persona("Catalina");
persona1.saludar();
persona1.getEspecie();
persona2.saludar();
persona2.getEspecie();
