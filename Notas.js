let notas = [5.0, 4.0, 3.5, 4.5, 3.8, 5.0];
let suma = 0;/*En esta variable se acumula la suma total*/
/*Se pone i = 0, para que inicie desde el primer elemento, en este caso el 5.0 inicial
el ciclo continua hasta que se complete la suma total de las 6 notas*/
for (let i = 0; i< notas.length; i++){
    suma = suma + notas [i]; /*Notas [i], es la nota correspondiente al numero del ciclo en el que va
    y esa nota se suma, lo que da igual a suma, que modifica el acumulador de arriba*/
}
/*Aqui calculamos el promedio, dividiendo el valor que adquiere la suma, despues de completar todo el ciclo
anterior, con el numero de notas registradas*/
let promedio = suma / notas.length; 
console.log("Promedio de las 6 notas:",  promedio);