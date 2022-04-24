
//Primer entregable Clase 4//
function saludo(nombre){
    alert("Bienvenido " + nombre)
}
function opciones(nombre){
    alert("Estimado " + nombre + " elija entre las siguientes opciones:\n\nOpcion 1: Ingrese Dinero \nOpcion 2: Retire Dinero\nOpcion 3: Plazo Fijo\nOpcion 4: Saldo\nOpcion 5: Salir")
}
function isString(tipo){
    if(typeof(tipo) === "string"){
        return true;
    }else{
        return false;
    }
}
function promedioValoraciones(valoracion){
    let valores = 0;
    for(let i = 0; i < valoracion.length; i++){
        valores += valoracion[i];
    }
    promedio = parseFloat(valores / valoracion.length);
    return promedio;
}
alert("Plataforma para Calculo de Intereses");
let nombre = prompt("Ingrese su nombre por favor");
while (isString(nombre) == false){
    alert("Por favor ingrese un Nombre, ningun otro valor sera aceptado");
    nombre = prompt("Ingrese su nombre por favor");
}
saludo(nombre);
opciones(nombre);
let saldo = 0;
let valoracion = [];
let valor = parseInt(prompt("Cual es la opcion que elije?"));
while(isNaN(valor) || valor < 1 || valor > 5){
    alert("Usted no ingreso un numero o bien ingreso uno fuera del rango admitido");
    valor = parseInt(prompt("Cual es la opcion que elije?"));
}
while(valor != 5){
    switch(valor){
        case 1:
            let ingreso = parseInt(prompt("Cuanto dinero desea ingresar?"))
            while(isNaN(ingreso) || ingreso < 5){
                alert("El valor ingresado no es un numero o es menor a 5(CINCO)");
                ingreso = parseInt(prompt("Cuanto dinero desea ingresar?"));
            }
            alert("Usted ingreso $" + ingreso + " a su cuenta");
            saldo = saldo + ingreso;
            break;
        
        case 2:
            let retiro = parseInt(prompt("Cuanto dinero desea retirar?"));
            while(isNaN(retiro) || retiro < 0){
                alert("El valor ingresado no es un numero o es menor a 0(CERO)");
                retiro = parseInt(prompt("Cuanto dinero desea retirar?"));
            }
            if((saldo - retiro) < 0){
                alert("Disculpe, el monto solicitado exede el saldo de su cuenta.\n\nIntente nuevamente por favor.");
            }else{
                saldo = saldo - retiro;
                alert("Usted retiro $" + retiro + " de su cuenta");
            }
            break;

        case 3:
            let monto = parseInt(prompt("Cual es el monto al cual quiere aplicarle un Plazo fijo"));
            while(isNaN(monto) || monto < 0 || (saldo - monto) < 0){
                if((saldo - monto) < 0){
                    alert("El monto que quiere retirar es mayor a su saldo actual.");
                }else{
                    alert("Usted no ingreso un numero o bien ingreso uno menor a 0");
                }
                monto = parseInt(prompt("Cual es el monto al cual quiere aplicarle un Plazo fijo"));
            }
            let interes = parseInt(prompt("Elija una opcion: \n\n\nOpcion1: 15%\nOpcion2: 20%\nOpcion3: 30%"));
            while(isNaN(interes) || interes < 1 || interes > 3){
                alert("Usted no ingreso un numero o bien ingreso uno fuera del rango admitido");
                interes = parseInt(prompt("Elija una opcion: \n\n\nOpcion1: 15%\nOpcion2: 20%\nOpcion3: 30%"));
            }
            let total = 0;
            switch(interes){
                case 1: 
                    total = monto + monto * 0.15;
                    alert("Si aplica un plazo fijo al monto de $" + monto + "aplicando un 15% recibira un total de $" + total );
                    break;
                case 2:
                    total = monto + monto * 0.20;
                    alert("Si aplica un plazo fijo al monto de $" + monto + "aplicando un 20% recibira un total de $" + total );
                    break;
                case 3:
                    total = monto + monto * 0.30;
                    alert("Si aplica un plazo fijo al monto de $" + monto + "aplicando un 30% recibira un total de $" + total );
                    break;
            }
        case 4:
            alert("Su saldo es de: $" + saldo);
    }
    let valorValoracion = parseInt(prompt("Por favor ingrese en una escala del 1 al 10 cual fue su satisfacicon al usar el Programa de Calculo de Intereses: "));
    while(isNaN(valorValoracion) || valorValoracion < 1 || valorValoracion > 10){
        alert("Usted no ingreso un numero o bien ingreso uno fuera del rango admitido");
        valorValoracion = parseInt(prompt("Por favor ingrese en una escala del 1 al 10 cual fue su satisfacicon al usar el Programa de Calculo de Intereses: "));
    }  
    valoracion.push(valorValoracion);
    opciones(nombre);
    valor = parseInt(prompt("Cual es la opcion que elije?"));
    while(isNaN(valor) || valor < 1 || valor > 5){
        alert("Usted no ingreso un numero o bien ingreso uno fuera del rango admitido");
        valor = parseInt(prompt("Cual es la opcion que elije?"));
    }
    
}
prom = promedioValoraciones(valoracion);
alert("El usuario " + nombre + " valoro el programa con un valor promedio de: " + prom);