/*ESTUDIANTE-A
El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
Un estudiante becado recibe una beca mensual de $30 si su promedio de notas es superior a
15, ó recibe $20 si es al menos $10; si el promedio es menor de 10, no recibe beca.
Diseñe las clases Cl_estudiante y Cl_becado, usando herencia, de manera que procese un
estudiante y reporte el monto de la beca, o si no le corresponde beca.*/

import Cl_becado from "./Cl_becado.js";

let estudiante = new Cl_becado("MARY",132,8);
let estudiante2 = new Cl_becado("JALIRIO", 315, 35  );
let salida = document.getElementById("salida");


salida.innerHTML = `El promedio de notas de ${estudiante.nombre} es ${estudiante.promedio()} <br> y el monto de la beca es ${estudiante.montoBeca()}`
salidainesta.innerHTML = `El promedio de notas de ${estudiante2.nombre} es ${estudiante2.promedio()} <br> y el monto de la beca es ${estudiante2.montoBeca()}`
