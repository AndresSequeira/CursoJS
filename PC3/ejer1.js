$numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i=0;i<$numeros.length;i++) {

    console.log($numeros[i]);
};



function SumaArray($numeros2){

    let $suma =0;

    for(let i=0;i<$numeros2.length;i++) {

        $suma = $suma+ $numeros2[i];
    }

    return $suma;  
}

console.log(SumaArray([1,2,3,4,5,6,7,8,9,10]));

