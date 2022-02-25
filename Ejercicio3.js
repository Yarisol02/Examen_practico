var numero = prompt("Por favor, introduce un número entero");
var resultado = par_impar(numero);
alert("El número "+numero+" es "+resultado);
function par_impar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
