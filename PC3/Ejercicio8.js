console.log("resolviendo practica 2, pregunta 7");

/*Ejercicio 8: Contar Caracteres
Crea una función llamada contarCaracteres que reciba una cadena de texto y
un carácter, y devuelva el número de veces que el carácter aparece en la
cadena.
Prueba la función contarCaracteres y muestra el resultado en la consola.*/

function contarCaracteres(cadena, caracter){
    let contador = 0;
    for(let i=0;i< cadena.length;i++){
        if(cadena[i] === caracter){
            contador++;
        }

    }
    return contador;

}

let texto = "hola mundo como estas";
let caracter = "a";

let resultado = contarCaracteres(texto,caracter);

console.log(resultado);