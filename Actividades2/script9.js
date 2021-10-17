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