function bisiesto(){
    var num=prompt("dame el un número");
    num = Number(num);

    if(num%4==0 && num%100!=0 || num%400==0){
    document.getElementById("texto").innerHTML="Es año bisiesto, otro día más de sufri...Felicidad";
        
    }else{
    document.getElementById("texto").innerHTML="No es bisiesto, Un día menos para vacaciones";
    }

}