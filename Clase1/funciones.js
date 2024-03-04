// console.log("primer paso");

// function saludar () {
//     console.log("segundo dos");
//     console.log("Hola mundo!");
// }
// console.log("tercer paso");
// saludar();

// const saludar2 = () => {
//     console.log("Hola mundo! 2");
//     return "Javier";
// }

// // saludar2();
// console.log(saludar2());

const sumar = (valor1, valor2) => {
    // console.log(valor1,valor2);
    return valor1 + valor2;
}

const restar = (valor1, valor2) => {
    // console.log(valor1,valor2);
    return valor1 - valor2;
}

const multiplicar = (valor1, valor2) => {
    // console.log(valor1,valor2);
    return valor1 * valor2;
}

const dividir = (valor1, valor2) => {
    // console.log(valor1,valor2);
    return valor1 / valor2;
}

console.log(sumar(5,5));
console.log(restar(5,5));
console.log(multiplicar(5,5));
console.log(dividir(5,5));


// Cuando el return es una sola linea de codigo, se puede simplificar

const sumar2 = (valor1, valor2) => valor1 + valor2;
const restar2 = (valor1, valor2) => valor1 - valor2;
const multiplicar2 = (valor1, valor2) => valor1 * valor2;
const dividir2 = (valor1, valor2) => valor1 / valor2;

console.log(sumar2(5,5));
console.log(restar2(5,5));
console.log(multiplicar2(5,5));
console.log(dividir2(5,5));