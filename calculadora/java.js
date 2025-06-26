function soma(){

let primeiro_numero = parceFloat (document.getElementById(primeiro_numero).value);
let segundo_numero = parseFloat (document.getElementById(segundo_numero).value);

let soma_numero = primeiro_numero + segundo_numero;

document.getElementById('resultado').testContext = 'Resultado' + soma_numero

}

function subtrai(){

let primeiro_numero = parceFloat (document.getElementById(primeiro_numero).value);
let segundo_numero = parseFloat (document.getElementById(segundo_numero).value);

let subtrai_numero = primeiro_numero - segundo_numero;

document.getElementById('resultado').testContext = 'Resultado' + subtrai_numero

}

function maior{
let primeiro_numero = parseFloat (document.getElementById(primeiro_numero).value);
let segundo_numero = parseFloat (document.getElementById(segundo_numero).value);
if(primeiro_numero>segundo_numero){
   document.getElementById('resultado').testContext = "o maior é" + primeiro_numero;
   return;

}else(primeiro_numero<segundo_numero){
   document.getElementById('resultado').testContext = "o maior é" + segundo_numero;
   return;

}else{

   document.getElementById('resultado').testContext = "são iguais";

}
}