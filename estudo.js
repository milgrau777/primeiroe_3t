let tabuada = 2;

function escreva(){
    document.write("tabuada do " + tabuada + "<br>");
    document.write(tabuada + " x 1 =  " + (tabuada*1)+"<br>");
    document.write(tabuada + " x 2 =  " + (tabuada*2)+"<br>");
    document.write(tabuada + " x 3 =  " + (tabuada*3)+"<br>");
    document.write(tabuada + " x 4 =  " + (tabuada*4)+"<br>");
    document.write(tabuada + " x 5 =  " + (tabuada*5)+"<br>");
    document.write(tabuada + " x 6 =  " + (tabuada*6)+"<br>");
    document.write(tabuada + " x 7 =  " + (tabuada*7)+"<br>");
    document.write(tabuada + " x 8 =  " + (tabuada*8)+"<br>");
    document.write(tabuada + " x 9 =  " + (tabuada*9)+"<br>");
    document.write(tabuada + " x 10 =  " + (tabuada*10)+"<br>");
};
function minhatabuada(){
    for(let i=0; i < 10; i++){
        document.write("tabuada do " + 1 + "<br>" );
        for(let j = 1;~j<= 10; j++){
          document.write(tabuada + "x" + 1 + " = " + (j*i)+"<br>")
        }
    document.write("<br>");

    }

      function quadrado(){
          for(let i=1; i <=10; i++){
              Document.write("o quadrado de " + i + " é " + (i*i) + "<br>");
          }
      }
      }
function calcula(){
    let val = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    let t = document.getElementById("meses").value;


    if(!number(val)){
        alert("o valor deve ser um número.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return

    }
    if(!number(j)){
        alert("o valor dos juros deve  ser um número.");
        document.getElementById("juros").value;
        document.getElementById("juros").focus();
        return

    }
    if(!number(t)){
        alert("A quantidade de meses deve ser um número.");
        document.getElementById("meses").value;
        document.getElementById("").focus();
        return

    }
    let res = val;
    for(let m=1; m <= t;m++){
        res = val * (1+(j/100));
        val = res;
        // document.write("Mes "+ m + " = "  + res + "<br>");
    }


        document.getElementById("total").innerHTML= "total: "+moeda(res);
    }
    footer
       
function somaNota(){
    let n1 = document.getElementById("t1").value;
    let n2 = document.getElementById("t2").value;
    let n3 = document.getElementById("t3").value;
    let r = number(n1) + number(n2) + number(n3);
    document.getElementById("resultado").innerHTML="soma:" + r;
}
function calculaMedia(){
    let r1 = document.getElementById("t1").value;
    let r2 = document.getElementById("t2").value;
    let r3 = document.getElementById("t3").value;
    let r = number(n1) + number(n2) + number(n3);
    document.getElementById("resultado").innerHTML="soma:" + r;

}}
