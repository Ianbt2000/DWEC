function nota(){
    var n=prompt("indique una nota");

    parseFloat(n);

    if(n>=1 && n<3){
        document.getElementById("texto").innerHTML="Muy deficiente";
    }else if(n>=3 && n<5){
        document.getElementById("texto").innerHTML="Insuficiente";
    }else  if(n>=5 && n<6){
        document.getElementById("texto").innerHTML="Suficiente";
    }else  if(n>=6 && n<9){
        document.getElementById("texto").innerHTML="notable";
    } if(n>=9 && n<=10){
        document.getElementById("texto").innerHTML="yisus, digo Sobresaliente";
    }
}