class Telefono{
    constructor (marca,modelo){
        this._marca = marca;
        this._modelo = modelo;
    }

    get marcaTel(){
        return this._marca;
    }

    get modTel(){
        return this._modelo;
    }
    set marcaNuevo(marca){
        this._marca = marca;
    }
    set modNuevo(modelo){
        this._modelo = modelo;
    }

    
}
var telefono1 = new Telefono();
function tel(){
    let marca = prompt("indique marca");
    let modelo = prompt("indique modelo");

    telefono1.marcaNuevo=marca;
    telefono1.modNuevo=modelo;


    document.write("<h2 id='texto'>"+telefono1.marcaTel+" "+telefono1.modTel+"</h2>"+'<h3 onclick="tel2()">cambiar marca</h3>');

    
}

function tel2(){
    

    let nuevo =prompt("indique nueva marca");
    telefono1.marcaNuevo=nuevo;

    document.getElementById("texto").innerHTML=("<h2 id='texto'>"+telefono1.marcaTel+" "+telefono1.modTel+"</h2>");

}