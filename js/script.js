var tip = [0,0,0,0,0,0];
for(i = 0;i<tip.length;i++){
    var exist = false;
    do{
        exist = false;
        var cislo = Math.floor((Math.random()*49)+1);
        for(j = 0;j<i;j++){
            if(cislo==tip[j]){
                exist = true;
            }
        }
    }while(exist);
    tip[i] = cislo;
}


var cislo2 = 0;
document.write("<table>");
document.write("<tr>");
document.write("<td><th colspan='5' align='center'>Sportka</th></td>");
document.write("</tr>");
for (j = 0; j < 10; j++) {
    document.write("<tr>");
    for (i = 0; i < 5; i++) {
        if (cislo2 != 49) {
            cislo2++;
        } else {
            cislo2 = "N";
        }
        document.write("<td>");
        document.write(cislo2);
        document.write("</td>");
    }
    document.write("</tr>")
}
document.write("</table>");

