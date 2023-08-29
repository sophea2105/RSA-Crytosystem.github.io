
function convert(){
    document.getElementById("result").innerHTML="";
    document.getElementById("result2").innerHTML="";
    document.getElementById("result1").innerHTML="";
    text=document.getElementById("password").value;
    length=text.length;
    for(let i=0;i<length;i++){
        if(text[i]=="A" || text[i]=="a"){
            code="00";
        }else if(text[i]=="B" || text[i]=="b"){
            code="01";
        }else if(text[i]=="C" || text[i]=="c"){
            code="02";
        }else if(text[i]=="D" || text[i]=="d"){
            code="03";
        }else if(text[i]=="E" || text[i]=="e"){
            code="04";
        }else if(text[i]=="F" || text[i]=="f"){
            code="05";
        }else if(text[i]=="G" || text[i]=="g"){
            code="06";
        }else if(text[i]=="H" || text[i]=="h"){
            code="07";
        }else if(text[i]=="I" || text[i]=="i"){
            code="08";
        }else if(text[i]=="J" || text[i]=="j"){
            code="09";
        }else if(text[i]=="K" || text[i]=="k"){
            code="10";
        }else if(text[i]=="L" || text[i]=="l"){
            code="11";
        }else if(text[i]=="M" || text[i]=="m"){
            code="12";
        }else if(text[i]=="N" || text[i]=="n"){
            code="13";
        }else if(text[i]=="O" || text[i]=="o"){
            code="14";
        }else if(text[i]=="P" || text[i]=="p"){
            code="15";
        }else if(text[i]=="Q" || text[i]=="q"){
            code="16";
        }else if(text[i]=="R" || text[i]=="r"){
            code="17";
        }else if(text[i]=="S" || text[i]=="s"){
            code="18";
        }else if(text[i]=="T" || text[i]=="t"){
            code="19";
        }else if(text[i]=="U" || text[i]=="u"){
            code="20";
        }else if(text[i]=="V" || text[i]=="v"){
            code="21";
        }else if(text[i]=="W" || text[i]=="w"){
            code="22";
        }else if(text[i]=="X" || text[i]=="x"){
            code="23";
        }else if(text[i]=="Y" || text[i]=="y"){
            code="24";
        }else if(text[i]=="Z" || text[i]=="z"){
            code="25";
        }else if(text[i]==" "){
            code="26";
        }
        document.getElementById("result").innerHTML+=code+" ";
    }
    a= document.getElementById("result").innerHTML;
    var word = a.split(" ");
    total = word.length;
    let n=21;
    let e=5;
    for(let x=0;x<total-1;x++){
        document.getElementById("result1").innerHTML+= Math.pow(parseFloat(word[x]),e)%n+" ";
    }
}
function convert1(){
    document.getElementById("results").innerHTML="";
    document.getElementById("results1").innerHTML="";
    var d=document.getElementById("d").value;
    text=document.getElementById("code").value;
    // if(isNaN(text)){
    //     document.getElementById("results1").innerHTML="Error";
    // }
    if(d==""){
        document.getElementById("results").innerHTML="Please Input The keyword";
    }else if(text==""){
        document.getElementById("results").innerHTML="Please Input The Value";
    }else{
        var word = text.split(" ");
        total = word.length;
        let n=21;
        let e=5;
        
        for(let i=0;i<total;i++){
            document.getElementById("results").innerHTML+= Math.pow(parseFloat(word[i]),d)%n+" ";
        }
        a=document.getElementById("results").innerHTML;
        var word1 = a.split(" ");
        total = word1.length;
        for(let x=0;x<total-1;x++){
            if(word1[x]==0){
                code="A";
            }else if(word1[x]==1){
                code="B";
            }else if(word1[x]==2){
                code="C";
            }else if(word1[x]==3){
                code="D";
            }else if(word1[x]==4){
                code="E";
            }else if(word1[x]==5){
                code="F";
            }else if(word1[x]==6){
                code="G";
            }else if(word1[x]==7){
                code="H";
            }else if(word1[x]==8){
                code="I";
            }else if(word1[x]==9){
                code="J";
            }else if(word1[x]==10){
                code="K";
            }else if(word1[x]==11){
                code="L";
            }else if(word1[x]==12){
                code="M";
            }else if(word1[x]==13){
                code="N";
            }else if(word1[x]==14){
                code="O";
            }else if(word1[x]==15){
                code="P";
            }else if(word1[x]==16){
                code="Q";
            }else if(word1[x]==17){
                code="R";
            }else if(word1[x]==18){
                code="S";
            }else if(word1[x]==19){
                code="T";
            }else if(word1[x]==20){
                code="U";
            }else if(word1[x]==21){
                code="V";
            }else if(word1[x]==22){
                code="W";
            }else if(word1[x]==23){
                code="X";
            }else if(word1[x]==24){
                code="Y";
            }else if(word1[x]==25){
                code="Z";
            }else if(word1[x]==26){
                code=" ";
            }
            document.getElementById("results1").innerHTML+= code;
        }

    }
    
}