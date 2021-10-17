class Telefono{
    constructor (marca){
        this.marca = marca;
        
    }
    anuncio(){
        alert("el telefono de la marca "+this.marca+" esta disponible");
    }
}
class Modelo extends Telefono{
    constructor (marca, modelo){
        super(marca);
        this.modelo = modelo;
    }

    anuncioCompleto(){
        alert("el telefono de la marca "+this.marca+" esta disponible  y este modelo "+ this.modelo +" esta disponible");

    }
}
var telefono1 = new Telefono();

function tel(){ 
    let marca = prompt("indique marca");
    let telefono1 = new Telefono(marca);
    telefono1.anuncio();

    let modelo = prompt("indique modelo");
    let modelo1 = new Modelo(marca,modelo);    
    modelo1.anuncioCompleto();

}