// Version Tradicional

function suma(a,b){
    const resultado=a+b;
    return resultado;
}

// Funcion flecha

const sumar=(a,b)=>{
    const suma=a+b;
    return suma;
}

console.log(suma(8,119));
console.log(sumar(110,1))


// Si mi funcion flecha tiene una sola linea y retorna una sola cosa podemos simplificarlo y no ponerle llaves


const resta=(a,b)=> a-b;
console.log(resta(9,8))


// *************************/
const arr =[2,3,4,5,6,7,8,9,10,11,12];

// Forma Normal
const pares=arr.filter(function(num){
    return num%2===0
})

// Transformarla a Arrows Function 
const impares=arr.filter((num)=>{ num%2!==0})
console.log(impares)


console.log(pares)



