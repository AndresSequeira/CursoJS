function contarVocales($texto){

    $vocales = "aeiouAEIOU";

    $contador = 0;

    for(let i=0; i<$texto.length; i++){

        //INCLUDE
        //si esta dentro de la lista de vocales
        if($vocales.includes($texto[i])){

            $contador++;
        }
    }
    return $contador;

}

console.log(contarVocales("JavaScript es divertido"));