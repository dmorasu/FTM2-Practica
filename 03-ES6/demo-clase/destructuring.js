// Extraer informaciond e objetos y arrasy y guardarlos direcatemente en variables o utilizarlos


const obj= {
    cuidad:"Medellin",
    departamento: "Antioquia",
    pais:"Colombia"
}

function recortarObjeto({cuidad,departamento}){
    // const {cuidad,departamento}=obj;

    return{
        cuidad,
        departamento
    }
}

console.log(recortarObjeto(obj));



//! Generalmente para  arrays pequeños

const arr=["diego","Daniel","sad"];
const [personsa1,persona2,persona3]=arr;
console.log(personsa1);


