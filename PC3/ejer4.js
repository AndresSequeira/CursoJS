let array1 = [1, 2, 3, 4, 5];
let array2 = [5, 6, 7, 8, 9];

function ConcatenarArray(array,array2){

    let concatenacion = [];

    concatenacion = array.concat(array2);

    return concatenacion;
}

console.log(ConcatenarArray(array1,array2));