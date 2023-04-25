const arr1=[1,2,3];
const arr2=[4,5,6];

const nuevoArr=[...arr1,0,...arr2,11,12,]
console.log(nuevoArr);



// Tambien funciona con objetos

const persona={
    nombre:"Diego",
    mascota:"sad"
}

const personaConApellido={
    ...persona,
    apellido:"mora",
    mascota:"Max"

}

console.log(personaConApellido);