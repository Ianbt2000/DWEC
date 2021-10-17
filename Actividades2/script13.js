function perimetro(){
    var num1=prompt("dame el primer número");
    var num2=prompt("dame el segundo número");
    

    calculo(num1,num2);
}

function calculo(num1,num2){
    num1 = Number(num1);
    num2 = Number(num2);
    
    var result=(2*num1)+(2*num2);
    document.getElementById("texto").innerHTML="El perímetro es: "+result;

}