function biseccion(){
    var resultadosDiv = document.getElementById("resultados");
    var resultados = "";
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var i = parseInt(document.getElementById("i").value);
    
    for(var cont=1; cont<=i ;cont++) {
     var m=(a+b)/2;
     var fa=(a**a)-100;
     var fb=(b**b)-100;
     var fm=(m**m)-100;

   resultados += "En la interacion "+cont+" el valor es "+ m+" con el error |"+Math.abs(a-m)+"| <br/>";
     if ((fa*fm)<0) {
     var b=m;
     }
     
     if ((fm*fb)<0) {
     var a=m;
     }}
     resultadosDiv.innerHTML = resultados;
    }
    biseccion();



//metodo de newton

     function newton() {
        var resultadosDiv = document.getElementById("resultados");
        var resultados = "";
        var a = parseInt(document.getElementById("a").value);
       
          var resultado = (a- Math.cos(a) -a ** 3) / (-Math.sin(a) - 3 * (a ** 2));
          resultados +="En valor " + a + ", el resultado es: " + resultado+" <br/>";
        
  
        resultadosDiv.innerHTML = resultados;
      }
  
      newton();