const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Ingresa el primer numero: "));
let numero2 = Number(prompt("Ingresa el segundo numero: "));
let numero3 = Number(prompt("Ingresa el tercer numero: "));

let numeros = [numero1, numero2, numero3];
let mayor = 0;
let medio = 0;
let menor = 0;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;

    if (numero2 >= numero3) {
        medio = numero2;
        menor = numero3;
    } else {
        medio = numero3;
        menor = numero2;
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;

    if (numero1 >= numero3) {
        medio = numero1;
        menor = numero3;
    } else {
        medio = numero3;
        menor = numero1;
    }
} else {
    mayor = numero3;

    if (numero1 >= numero2) {
        medio = numero1;
        menor = numero2;
    } else {
        medio = numero2;
        menor = numero1;
    }
}

let mayorMenor = [];
mayorMenor.push(mayor);
mayorMenor.push(medio);
mayorMenor.push(menor);

let menorMayor = [];
menorMayor.push(menor);
menorMayor.push(medio);
menorMayor.push(mayor);

if (numero1 === numero2 && numero2 === numero3) {
    console.log(`Numeros son iguales: ${mayorMenor}.`);
} else {
    console.log(`Numeros ordenados de mayor a menor: ${mayorMenor}.`);
    console.log(`Numeros ordenados de menor a mayor: ${menorMayor}.`);
}