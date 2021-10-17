function mayor(){
    var respuesta=prompt("indique los números separados por espacios");

    var datos = respuesta.split(' ');

    var cadena="";

    for(i=0;i<datos.length;i++){
        if(datos[i]>10){
            cadena+=datos[i]+" ";
        }
    }
    if(cadena===""){
    document.getElementById("texto").innerHTML="no hay numeros mayores a 10";
    }else{
    document.getElementById("texto").innerHTML="estos son los números mayores a 10: "+cadena;
    }
}