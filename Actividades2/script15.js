class Telefono{
    constructor (numero,compania){
        this.pX = numero;
        this.pY = compania;
    }
}

class Persona{
    constructor (nombre,apellido){
        this.nombre = nombre;
        this.apellido= apellido;
    }
    nombreCompleto(){
        return this.nombre+" "+this.apellido;
    }

}

function tel(){
    let Telefono1 = new Telefono(644416771,"vodafone");

    let persona1 = new Persona("José","Toledo");

    document.getElementById("texto").innerHTML=(persona1.nombreCompleto());
}