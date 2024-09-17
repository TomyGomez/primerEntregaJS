/* 
crear algoritmo con por lo menos 1 condicional
crear algoritmo con  por lo menos un ciclo
hacer un simulador interactivo pedir valor y con eso hacer algo
pensar el alcance de tu proyecto. cotizador de seguros? un simulador de creditos ? un simulador personalizado?
*/

// AlGORITMO CON CONDICIONAL

// condicional y ciclo 

alert("Primer parte de la Entrega \nPromedio de Notas: \n");

let promedio = 0;
let acumulador = 0;
let contador= 0;

for(let i = 1; i<=4;i++){
    let numero = parseInt(prompt("Ingrese la nota del examen numero "+i+":"));
    acumulador += numero;
    contador++;

}
alert("Porfavor Revise la consola para verificar el Promedio calculado!");
promedio = acumulador/contador;
if(promedio >= 6 && promedio<=10){
    console.log("FELICIDADES! Aprobaste y tu promedio es:" +promedio);

}else{
    console.log("Lo lamento Desaprobaste y tu promedio es:"+promedio );
}


//calculadora de impuesto de tarjeta 
alert("Segundo Ejercicio \nCalculadora de Impuesto Dolar");

let unDolar = 982;
alert("el dolar para la venta esta : "+ "$"+ unDolar);
let monto = parseInt(prompt("Ingrese un valor en dolares:"));
let dolar = unDolar*monto;
let impuestoTarjeta = dolar*(38/100) + dolar;

alert("Porfavor Revise la consola para verificar el valor del Dolar calculado!");

console.log("Los dolares a calcular son: " +"u$"+ monto);
console.log("El monto sin impuestos es : "+ "$"+ dolar);
console.log("Los dolares a abonar con impuesto del 38% es: "+ "$"+impuestoTarjeta);
