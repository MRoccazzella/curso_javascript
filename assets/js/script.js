
alert("Bienvenido al calculo de intereses");
let monto = parseInt(prompt("Cual es el monto al cual quiere aplicarle un interes?"));
while(isNaN(monto) || monto < 0){
    alert("El valor ingresado no es un numero o bien es un valor negativo.")
    monto = parseInt(prompt("Cual es el monto al cual quiere aplicarle un interes?"));
}
let interes = parseInt(prompt("Cual es el interes que quiere aplicar?     0 a 1000"));
while(interes < 0 || interes > 1000 || isNaN(interes)){
    alert("El valor ingresado no es un numero o bien no se encuentra dentro del rango admitido")
    interes = parseInt(prompt("Cual es el interes que quiere aplicar?     0 a 1000"));
}
let total = monto + (monto * interes / 100)
alert("Al monto de $" + monto + " aplicandole el interes del "+ interes + "% es igual a: $" + total);