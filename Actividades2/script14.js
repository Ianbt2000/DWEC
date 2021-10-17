function factorio(){
    var num=prompt("dame el un número");
    num= Number(num);
    
    var resultado=1;
    for(i=1;i<=num;i++){
        resultado=+i*resultado;
    }
    document.getElementById("texto").innerHTML="El factorial de "+num+" es: "+resultado;

}