/* 
crear algoritmo con por lo menos 1 condicional
crear algoritmo con  por lo menos un ciclo
hacer un simulador interactivo pedir valor y con eso hacer algo
pensar el alcance de tu proyecto. cotizador de seguros? un simulador de creditos ? un simulador personalizado?
*/

// AlGORITMO CON CONDICIONAL

// condicional y ciclo 

console.log("Promedio de Notas: \n");

let promedio = 0;
let acumulador = 0;
let contador= 0;

for(let i = 1; i<=4;i++){
    let numero = parseInt(prompt("Ingrese una nota:"));
    acumulador += numero;
    contador++;

}
promedio = acumulador/contador;
if(promedio >= 6 && promedio<=10){
    console.log("FELICIDADES! APROBASTE Y TU PROMEDIO ES:" +promedio);

}else{
    console.log("Lo lamento Desaprobaste y tu promedio es:"+promedio );
}



console.log("SIGUIENTE EJERCICOS \nCALCULADORA DE IMPUESTO Dolares")//calculadora de impuesto de tarjeta 

let unDolar = 730;
alert("el dolar esta : "+ unDolar);
let monto = parseInt(prompt("Ingrese un valor en dolares:"));
let dolar = unDolar*monto;
let impuestoTarjeta = dolar*(65/100) + dolar;

console.log("El monto sin impuestos es : "+ monto*unDolar);
console.log("Los dolares a abonar con impuesto del 65% es: "+ impuestoTarjeta);
