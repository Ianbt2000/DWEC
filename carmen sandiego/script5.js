function numeros(){
    for(x=0;x<=100;x++){
        if(x%3 !=0){
            document.write(x+"<br>");
        }
    }
}

function numeros2(){
    for(x=0;x<=100;x++){
        if(x%3 ==0){
            continue;
        }
        document.write(x+"<br>");
        
    }
}