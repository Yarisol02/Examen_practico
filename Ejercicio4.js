function palíndromo(string) {

    let resultado = "La cadena \""+string+"\" \n";
  
    let cadena2 = string.toLowerCase();
  
    let letras1 = cadena2.split("");
  
    let cadena3 = "";
    for(i in letras1) {
      if(letras1[i] != " ") {
        cadena2 += letras1[i];
      }
    }
    let letras = cadena3.split("");
    let letrasAlRevés = cadena3.split("").reverse();
    let palin = true;
    for(i in letras) {
      if(letras[i] == letrasAlRevés[i]) {
      }
      else {
        palin = false;
      }
    }
  
    if(palin) {
      resultado += " es un palíndromo";
    }
    
    return resultado;
  }
  console.log(palíndromo("La ruta nos aporto otro paso natural"));
  