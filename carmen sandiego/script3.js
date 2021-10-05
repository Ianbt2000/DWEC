 function preguntas(){
    var r1 = prompt("¿es una ciudad costera?");
    var r2 = prompt("¿tiene equipo de futbol?");

    if (r1 == "si" && r2 == "si"){
        alert("es Valencia");
    }else if(r1 == "no" && r2== "si"){
        alert("es Aldaya");
    }else if(r1=="si" && r2=="no"){
        alert("es torrente");
    }else{
        alert("es Alboraya");
    }
}