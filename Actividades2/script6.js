function pares(){
    var par=prompt("indique un numero límite");
    var cadena="";
    for(i=2;i<par;i+=2){
        cadena+=i+" ";
    }
    document.getElementById("texto").innerHTML="Pares: "+cadena;

}