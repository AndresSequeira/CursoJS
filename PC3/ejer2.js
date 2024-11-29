function esPar($numero){
    if(($numero % 2) == 0){
        return true;
    }else {
        return false;
    }
}

console.log(esPar(9));


function filtarPares($numeros){

    let $nuevoArray =[];

    for(let i=0; i<$numeros.length;i++){
        
        if(($numeros[i] % 2) == 0){

            $nuevoArray.push($numeros[i]);
        }
    
    } 
    return $nuevoArray; 
}

console.log(filtarPares([1, 2, 3, 4, 5, 6,8]));

