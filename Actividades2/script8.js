function multi(){
    var num=prompt("indique un número");

    var cadena="";
    var result=0;
    for(i=1;i<10;i++){
        result=num*i;
        cadena+=num+"*"+i+"="+result+"<br/>";
    }
    document.getElementById("texto").innerHTML="tabla de multiplicar<br/> "+cadena;

}