var vidas =0;
var marcador=0;

function pregunta1(){
    var respuesta = prompt("¿cual es la capital de argentina?");
    if(respuesta == "Buenos Aires"){
        marcador++;
        document.getElementById("pregunta1").innerHTML=" ";
        document.getElementById("aciertos").innerHTML="Aciertos:"+marcador;

    }else{
        vidas++;
        document.getElementById("pregunta1").innerHTML=" ";
        document.getElementById("fallos").innerHTML="Fallos:"+vidas;
    }
    if(vidas == 3){
        document.write("<h1>Perdiste</h1>");
    }
    if(marcador == 4){
        document.write("<h1>Ganaste</h1>");
    }

}

function pregunta2(){
    var respuesta = prompt("¿cual es el número atómico del helio?");
    if(respuesta == "2"){
        marcador++;
        document.getElementById("pregunta2").innerHTML=" ";
        document.getElementById("aciertos").innerHTML="Aciertos:"+marcador;

    }else{
        vidas++;
        document.getElementById("pregunta2").innerHTML=" ";
        document.getElementById("fallos").innerHTML="Fallos:"+vidas;
    }
    if(vidas == 3){
        document.write("<h1>Perdiste</h1>");
    }
    if(marcador == 4){
        document.write("<h1>Ganaste</h1>");
    }

}

function pregunta3(){
    var respuesta = prompt("¿cual es el deporte más visto?");
    if(respuesta == "futbol"){
        marcador++;
        document.getElementById("pregunta3").innerHTML=" ";
        document.getElementById("aciertos").innerHTML="Aciertos:"+marcador;

    }else{
        vidas++;
        document.getElementById("pregunta3").innerHTML="";
        document.getElementById("fallos").innerHTML="Fallos:"+vidas;
    }
    if(vidas == 3){
        document.write("<h1>Perdiste</h1>");
    }
    if(marcador == 4){
        document.write("<h1>Ganaste</h1>");
    }

}

function pregunta4(){
    var respuesta = prompt("¿Como se apellida el pintor de las meninas?");
    if(respuesta == "Velazquez"){
        marcador++;
        document.getElementById("pregunta4").innerHTML=" ";
        document.getElementById("aciertos").innerHTML="Aciertos:"+marcador;

    }else{
        vidas++;
        document.getElementById("pregunta4").innerHTML=" ";
        document.getElementById("fallos").innerHTML="Fallos:"+vidas;
    }
    if(vidas == 3){
        document.write("<h1>Perdiste</h1>");
    }
    if(marcador == 4){
        document.write("<h1>Ganaste</h1>");
    }

}

function pregunta5(){
    var respuesta = prompt("¿En que año se descubrio América?");
    if(respuesta == "1492"){
        marcador++;
        document.getElementById("pregunta5").innerHTML=" ";
        document.getElementById("aciertos").innerHTML="Aciertos:"+marcador;

    }else{
        vidas++;
        document.getElementById("pregunta5").innerHTML=" ";
        document.getElementById("fallos").innerHTML="Fallos:"+vidas;
    }
    if(vidas == 3){
        document.write("<h1>Perdiste</h1>");
    }
    if(marcador == 4){
        document.write("<h1>Ganaste</h1>");
    }

}

function pregunta6(){
    var respuesta = prompt("¿Cuantos Óscar tiene Dicaprio?");
    if(respuesta == "1"){
        marcador++;
        document.getElementById("pregunta6").innerHTML=" ";
        document.getElementById("aciertos").innerHTML="Aciertos:"+marcador;

    }else{
        vidas++;
        document.getElementById("pregunta6").innerHTML=" ";
        document.getElementById("fallos").innerHTML="Fallos:"+vidas;
    }
    if(vidas == 3){
        document.write("<h1>Perdiste</h1>");
    }
    if(marcador == 4){
        document.write("<h1>Ganaste</h1>");
    }

}