/*Variable asignada bolso, caractetisticas, 4.*/
let bolso = {
    Color: "Negro",
    Tamaño: "Grande",
    Material: "Tela",
    Compartimientos: 9
}
/*El ejercicio pide que se recorra sus claves y valores, para eso se usa object.entries
para mostrar un arreglo que contiene pares, los elementos clave son las propiedades, color, tammaño, etc.
y los valores, es la información correspondiente a dichas propiedades*/
for (let [clave, valor] of Object.entries(bolso)){
    /*Mostramos la propiedad clave, con su valor correspondiente*/
    console.log(clave + ":", valor);
}