function fechas(){
    var respuesta=prompt("indique una fecha ('EJ: 13/09'): ");

    if(respuesta === "25/12"){
    document.getElementById("texto").innerHTML="Es navidad";
    }else{
    document.getElementById("texto").innerHTML="Es navidadn't (no es navidad)";
    }
}