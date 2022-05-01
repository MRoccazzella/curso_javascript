//FUNCIONES
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
function validacionCadena(valor){
    if(!isNaN(valor) || valor == ""){
        alert("valor invalido")
        return true;
    }else{
        return false;
    }
}

class Usuarios{
    constructor(id, clave, nombre, apellido, saldo, dni, edad){
        this.id = id;
        this.clave = clave;
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
        this.dni = dni;
        this. edad = edad;
    }
}

const usuario1 = new Usuarios(1, "Auto123", "Matias", "Roccazzella", 5000, 41835638, 23)
const usuario2 = new Usuarios(2, "Fuego2004","Franco", "Roccazzella", 800, 46825647, 18)
const usuario3 = new Usuarios(3, "OnePiece10","Dante", "De Luca", 2000, 42834891, 22)
const usuario4 = new Usuarios(4, "1234Dado","Santiago", "Iturralde", 7000, 41873902, 22)
listaUsuarios = [usuario1,usuario2,usuario3,usuario4]
//Inicio de programa
alert("Plataforma para Calculo de Intereses");
let consultaUsuario = parseInt(prompt("Ingrese 1 si ya posee un usuario\n\nIngrese 2 si quiere crear un usuario."))
while(isNaN(consultaUsuario) || consultaUsuario < 1 || consultaUsuario > 2){
    alert("El valor que ingreso no es un numero o se encuentra fuera del rango admitido");
    consultaUsuario = parseInt(prompt("Ingrese 1 si ya posee un usuario\n\nIngrese 2 si quiere crear un usuario."));
}
let estado = 0;
let intentos = 0
let usuarioFinal;
while(estado === 0){
    if(consultaUsuario === 1){
        let consultaId = parseInt(prompt("Ingrese su numero de Id"));
        while(isNaN(consultaId) || consultaId < 0 || consultaId > (listaUsuarios.length - 1)){
            alert("Usted no ingreso un numero o ingreso un id inexixtente");
            consultaId = parseInt(prompt("Ingrese su numero de Id"));
        }
        let consultaClave = prompt("Ingrese su clave.")
        while(consultaClave == ""){
            alert("Su clave no puede ser vacia")
            consultaClave = prompt("Ingrese su clave.")
        }
        if(listaUsuarios[consultaId-1].clave === consultaClave){
            usuarioFinal = listaUsuarios[consultaId - 1];
            alert("bienvenido " + usuarioFinal.nombre)
            estado = 1
        }else{
            alert("El id que ingreso no coincide con la clave.")
        }
        intentos ++;

    }else{
        let nuevoUserId = listaUsuarios.length + 1;
        alert("su id es: " + nuevoUserId);
        let nuevoUserClave = prompt("Ingrese su Clave:");
        while(validacionCadena(nuevoUserClave) || nuevoUserClave.length < 3){
            nuevoUserClave = prompt("Ingrese su Clave:");
        }
        let nuevoUserNombre = prompt("Ingrese su nombre:");
        while(validacionCadena(nuevoUserNombre)){
            nuevoUserNombre = prompt("Ingrese su nombre:");
        }
        let nuevoUserApellido = prompt("Ingrese su apellido:");
        while(validacionCadena(nuevoUserApellido)){
            nuevoUserApellido = prompt("Ingrese su apellido:");
        }
        let nuevoUserSaldo = 0;
        let nuevoUserDni = parseInt(prompt("Ingrese su DNI:"));
        while(isNaN(nuevoUserDni) || nuevoUserDni < 0){
            alert("Valor invalido.");
            nuevoUserDni = parseInt(prompt("Ingrese su DNI:"));
        }
        let nuevoUserEdad = parseInt(prompt("Ingrese su edad:"));
        while(isNaN(nuevoUserEdad) || nuevoUserEdad < 0){
            alert("Valor invalido.");
            nuevoUserDni = parseInt(prompt("Ingrese su edad:"));
        }
        const usuario5 = new Usuarios(nuevoUserId,nuevoUserClave,nuevoUserNombre,nuevoUserApellido,nuevoUserSaldo,nuevoUserDni,nuevoUserEdad);
        listaUsuarios.push(usuario5);
        usuarioFinal = usuario5;
        estado = 1;
        alert(`Bienvenido ${usuario5.nombre} ${usuario5.apellido}`)
    }
    if(intentos == 4){
        alert("Usted alcanzo el maximo de intentos para loguearse")
        estado = 1
    }
}

opciones(usuarioFinal.nombre);
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
            usuarioFinal.saldo += ingreso;
            break;
        
        case 2:
            let retiro = parseInt(prompt("Cuanto dinero desea retirar?"));
            while(isNaN(retiro) || retiro < 0){
                alert("El valor ingresado no es un numero o es menor a 0(CERO)");
                retiro = parseInt(prompt("Cuanto dinero desea retirar?"));
            }
            if((usuarioFinal.saldo - retiro) < 0){
                alert("Disculpe, el monto solicitado exede el saldo de su cuenta.\n\nIntente nuevamente por favor.");
            }else{
                usuarioFinal.saldo -= retiro;
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
            alert("Su saldo es de: $" + usuarioFinal.saldo);
    }
    let valorValoracion = parseInt(prompt("Por favor ingrese en una escala del 1 al 10 cual fue su satisfacicon al usar el Programa de Calculo de Intereses: "));
    while(isNaN(valorValoracion) || valorValoracion < 1 || valorValoracion > 10){
        alert("Usted no ingreso un numero o bien ingreso uno fuera del rango admitido");
        valorValoracion = parseInt(prompt("Por favor ingrese en una escala del 1 al 10 cual fue su satisfacicon al usar el Programa de Calculo de Intereses: "));
    }  
    valoracion.push(valorValoracion);
    opciones(usuarioFinal.nombre);
    valor = parseInt(prompt("Cual es la opcion que elije?"));
    while(isNaN(valor) || valor < 1 || valor > 5){
        alert("Usted no ingreso un numero o bien ingreso uno fuera del rango admitido");
        valor = parseInt(prompt("Cual es la opcion que elije?"));
    }
    
}
prom = promedioValoraciones(valoracion);
alert("El usuario " + usuarioFinal.nombre + " valoro el programa con un valor promedio de: " + prom);