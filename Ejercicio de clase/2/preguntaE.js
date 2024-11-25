function filtrarNumerosMayores(array, numeroDado) {
    // Filtramos el array para obtener los números mayores al número dado
    const numerosMayores = array.filter(num => num > numeroDado);
    return numerosMayores;
}

function filtrarNumerosMayores2(array, numeroDado) {
    let numerosMayores2 = []; // Declarar la variable como local
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numeroDado) {
            numerosMayores2.push(array[i]); 
        }
    }
    return numerosMayores2;
}

// Ejemplo de uso:
let numeros = [1, 5, 8, 10, 12, 3, 6];
let numeroDado = 5;

const resultado = filtrarNumerosMayores2(numeros, numeroDado);
console.log(resultado); 

const resultado2 = filtrarNumerosMayores2(numeros, numeroDado);
console.log(resultado2);
