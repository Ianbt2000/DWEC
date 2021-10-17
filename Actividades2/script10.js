function primo(){
    var num=prompt("indique un número");

    for(i=2;i<(num/2) && num%i!=0;i++);

    if((num/2)<=i){
        alert("El número es primo");
    }else{
        alert("El número no es primo");
    }

}