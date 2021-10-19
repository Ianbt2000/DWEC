function mensajes() {
    console.log("Hola mundo");
    alert("Hola mundo");
    document.getElementById('mensajes').innerHTML="Hola mundo"
}

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
    document.getElementById("mayor").innerHTML="no hay numeros mayores a 10";
    }else{
    document.getElementById("mayor").innerHTML="estos son los números mayores a 10: "+cadena;
    }
}

function fechas(){
    var respuesta=prompt("indique una fecha ('EJ: 13/09'): ");

    if(respuesta === "25/12"){
    document.getElementById("fechas").innerHTML="Es navidad";
    }else{
    document.getElementById("fechas").innerHTML="Es navidadn't (no es navidad)";
    }
}

function salario(){
    var sal=prompt("Indique su salario");
    

    var años=prompt("Indique su antigüedad");

    if(sal<500 && años>=10){
        sal= sal*3;
    }else if(sal<500 && años<10){
        sal=sal*2;
    }

    document.getElementById("salario").innerHTML="El nuevo salario es "+sal;
}

function nota(){
    var n=prompt("indique una nota");

    parseFloat(n);

    if(n>=1 && n<3){
        document.getElementById("nota").innerHTML="Muy deficiente";
    }else if(n>=3 && n<5){
        document.getElementById("nota").innerHTML="Insuficiente";
    }else  if(n>=5 && n<6){
        document.getElementById("nota").innerHTML="Suficiente";
    }else  if(n>=6 && n<9){
        document.getElementById("nota").innerHTML="notable";
    } if(n>=9 && n<=10){
        document.getElementById("nota").innerHTML="yisus, digo Sobresaliente";
    }
}

function pares(){
    var par=prompt("indique un numero límite");
    var cadena="";
    for(i=2;i<=par;i+=2){
        cadena+=i+" ";
    }
    document.getElementById("pares").innerHTML="Pares: "+cadena;

}

function impares(){
    var impar=prompt("indique un numero límite");
    var cadena="";
    for(i=1;i<=impar;i+=2){
        cadena+=i+" ";
    }
    document.getElementById("impares").innerHTML="Impares: "+cadena;

}

function multi(){
    var num=prompt("indique un número");

    var cadena="";
    var result=0;
    for(i=1;i<10;i++){
        result=num*i;
        cadena+=num+"*"+i+"="+result+"<br/>";
    }
    document.getElementById("multi").innerHTML="tabla de multiplicar<br/> "+cadena;

}

function tabla(){
    var num=prompt("indique filas: ");
    var num2=prompt("indique columnas: ");
    document.write("<table border='2'>");

    for(var i = 0; i < num; i++) {
        document.write("<tr>");//filas
        for (var j = 0; j < num2; j++) {
            
            document.write("<td>");
            document.write("Fila "+(i+1)+", columna "+(j+1));
            document.write("</td>");
            
        }
        document.write("</tr>");
    }
    document.write("</table>")
}

function primo(){
    var num=prompt("indique un número");

    for(i=2;i<(num/2) && num%i!=0;i++);

    if((num/2)<=i){
        alert("El número es primo");
    }else{
        alert("El número no es primo");
    }

}

function suma(){
    var num1=prompt("dame el primer número");
    var num2=prompt("dame el segundo número");
    

    calculo(num1,num2);
}

function calculo(num1,num2){
    num1 = Number(num1);
    num2 = Number(num2);
    
    var result=num1+num2;
    document.getElementById("suma").innerHTML="la suma de:  "+num1 +"+"+num2+"="+result;

}

function bisiesto(){
    var num=prompt("dame el un número");
    num = Number(num);

    if(num%4==0 && num%100!=0 || num%400==0){
    document.getElementById("bisiesto").innerHTML="Es año bisiesto, otro día más de sufri...Felicidad";
        
    }else{
    document.getElementById("bisiesto").innerHTML="No es bisiesto, Un día menos para vacaciones";
    }

}
function perimetro(){
    var num1=prompt("dame el primer número");
    var num2=prompt("dame el segundo número");
    

    calculo2(num1,num2);
}

function calculo2(num1,num2){
    num1 = Number(num1);
    num2 = Number(num2);
    
    var result=(2*num1)+(2*num2);
    document.getElementById("perimetro").innerHTML="El perímetro es: "+result;

}

function factorio(){
    var num=prompt("dame el un número");
    num= Number(num);
    
    var resultado=1;
    for(i=1;i<=num;i++){
        resultado=+i*resultado;
    }
    document.getElementById("factorio").innerHTML="El factorial de "+num+" es: "+resultado;

}