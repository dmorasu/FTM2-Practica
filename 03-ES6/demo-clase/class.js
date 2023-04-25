// Clase 
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }

    getNombre(){
        return this.nombre;
    }
}
const persona1= new Persona("Andres","Alvarez")
console.log(persona1);

console.log(persona1.getNombre());


class Empleado extends Persona{
    constructor(nombre,apellido,cargo){
        super(nombre,apellido); //! con la palabra super llamamos al constructor de personas
        this.cargo=cargo;
    }
}

const empleado1 =new Empleado("Daniel","Ospina","Abogado")
console.log(empleado1)
