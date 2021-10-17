function salario(){
    var sal=prompt("Indique su salario");
    

    var años=prompt("Indique su antigüedad");

    if(sal<500 && años>=10){
        sal= sal*3;
    }else if(sal<500 && años<10){
        sal=sal*2;
    }

    document.getElementById("texto").innerHTML="El nuevo salario es "+sal;
}