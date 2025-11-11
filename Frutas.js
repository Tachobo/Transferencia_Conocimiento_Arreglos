let frutas = ["Manzana", "Pera", "Uva"];
frutas.unshift("Banano");/*Añade Banano al inicio*/
frutas.pop();/*Quita la uva que esta al final*/
/*Muestra el arreglo Final*/
console.log("Arreglo Final:", frutas);
/*Se recorre el arreglo con for of, y solo se muestra fruta*/
for(let fruta of frutas){
    console.log("Frutas", fruta);
}
