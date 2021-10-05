function horas() {
    
    var horario =""
    for(x=8;x<21;x++){
        for(y=0;y<60;y+=15){
            if (x<10){
                horario+="0";
            }
            horario += x+":"+y;
            if (y==0){
                horario +="0";
            }
            if(x!=20 || y!=45){
            document.write(horario+"<br>");
            }
            horario="";
        }
    }

}

function camisetas() {
    var x=4;
    var jugadores = {"pepe":x,"juan":x,"paco":x,"fran":x,"pepi":x,"juana":x,"paca":x,"francisca":x,"isma":x,"javi":x}
    var prop;
    for (prop in jugadores){
        document.write(prop+":"+x+"; ");
        x+=4;
    }

}

function bucle(){
    var respuesta = prompt("¿Cuál fue el apellido del primer presidente de la democracia española?");

    while(respuesta != "Suarez"){
        respuesta = prompt("¿Cuál fue el apellido del primer presidente de la democracia española?");
    }
}


function bucle2(){
    

    do{
        respuesta = prompt("¿Cuál fue el primer presidente de la democracia española?");
        if (respuesta == "Adolfo"){
            respuesta = prompt ("Te falta el apellido ¿Cuál fue el primer presidente de la democracia española?");
        }
        if (respuesta == "Suarez"){
            respuesta = prompt ("Te falta el nombre ¿Cuál fue el primer presidente de la democracia española?");
        }
        if (respuesta != "Adolfo Suarez"){
            confirm ("error vuelve a intentarlo");
        }
    }while(respuesta != "Adolfo Suarez");
}