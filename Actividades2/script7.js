function impares(){
    var impar=prompt("indique un numero límite");
    var cadena="";
    for(i=1;i<impar;i+=2){
        cadena+=i+" ";
    }
    document.getElementById("texto").innerHTML="Impares: "+cadena;

}