const obtenerCombinaciones = palabra => {
    
    const posiblesCombinaciones = [];
    for (let i = 0; i < palabra.length; i++) {
        let combinacion = palabra.charAt(i);
        posiblesCombinaciones.push(combinacion);
        for (let j = i + 1; j < palabra.length; j++) {
            combinacion += palabra.charAt(j);
            posiblesCombinaciones.push(combinacion);
        }
    }
    return posiblesCombinaciones;
}

const palabras = ["casa"];
for (const palabra of palabras) {
    const posiblesCombinaciones = obtenerCombinaciones(palabra);
    console.log("Las posibles combinaciones de '%s' podrían ser:", palabra);
    for (const combinacion of posiblesCombinaciones) {
        console.log(combinacion);
    }
}