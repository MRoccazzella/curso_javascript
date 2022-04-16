
alert("Bienvenido al calculo de intereses");
let monto = parseInt(prompt("Cual es el monto al cual quiere aplicarle un interes?"));
let interes = parseInt(prompt("Cual es el interes que quiere aplicar?    de 0 a 1000"));
while(monto < 0){
    alert("El moto que ingreso es menor a 0")
    monto = parseInt(prompt("Cual es el monto al cual quiere aplicarle un interes?"));
}
while(interes < 0 || interes > 1000){
    alert("El interes no se encuentra dentro del rango admitido")
    interes = parseInt(prompt("Cual es el interes que quiere aplicar?    de 0 a 1000"));
}
let total = monto + (monto * interes / 100)
alert("Al monto de $" + monto + " aplicandole el interes del "+ interes + "% es igual a: $" + total);