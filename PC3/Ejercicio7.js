console.log("resolviendo practica 2, pregunta 7");

/*Ejercicio 7: Filtrar Elementos
Crea un array llamado palabras que contenga varias palabras.
Crea una función llamada filtrarPalabras que reciba un array y un número, y
devuelva un nuevo array con las palabras que tengan más letras que el número
especificado.
Prueba la función filtrarPalabras y muestra el resultado en la consola.*/

let palabras = ["perro","gato","gallina","caballo","mono","asno","buey","jirafa","elefante","camello"];


function filtrarPalabras(array, numero){
    let newArray = [];
    for(let i=0; i< array.length;i++){
        if(array[i].length>numero){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
let numero =7;
let resultado = filtrarPalabras(palabras,numero);
console.log(resultado);
