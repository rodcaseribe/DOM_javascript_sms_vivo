javascript:var numeros = ["16+NUMERO", "16+NUMERO", "16+NUMERO"];
var x = location.href;
function loop(index) {
   	if (index < numeros.length) {
	      document.getElementById("number").value = numeros[index];
	      document.getElementById("messages").value = "enviado!";
	      doSend(0);
	      x;      
    setTimeout(function() { 
		    loop(index+1); }, 8000);
   }

}
	

setTimeout(function() { loop(0); }, 8000);
