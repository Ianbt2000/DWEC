function suma(){
    var num1=prompt("dame el primer número");
    var num2=prompt("dame el segundo número");
    

    calculo(num1,num2);
}

function calculo(num1,num2){
    num1 = Number(num1);
    num2 = Number(num2);
    
    var result=num1+num2;
    document.getElementById("texto").innerHTML="la suma de:  "+num1 +"+"+num2+"="+result;

}