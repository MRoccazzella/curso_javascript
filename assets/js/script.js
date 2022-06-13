
//Variables globales 
const listaCriptos = ["btc", "eth", "dai", "usdt", "usdc", "busd", "usdp", "bnb", "sol", "dot", "matic", "avax", "ftm", "link", "uni", "bch", "ltc", "xrp", "axs", "slp", "mana", "bat", "trx", "doge"]
const listaCriptosNombres = ["bitcoin", "ethereum", "dai", "usdt", "usdc", "busd", "usdp", "binance", "solana", "polkadot", "polygon", "avax", "fantom", "chainlink", "uniswap", "bitcoin cash", "litecoin", "ripple", "axie", "smooth love poison", "decentraland", "basic attention token", "tron", "dogecoin"]
const soloNumeros = /^[0-9]*(\.?)[0-9]+$/
const numerosYpunto = /[\d.]+/
let texto = document.getElementById("buscador")


//Consumo de apis y retorno en HTML
for(let i = 0; i < listaCriptos.length; i++){
    fetch(`https://criptoya.com/api/ftx/${listaCriptos[i]}/ars/0.1`)
    .then(response => response.json())
    .then(data => {
        let valor = {...data}
        const divCry = document.querySelector(`#${listaCriptos[i]}`)
        divCry.innerHTML += `
        <h4> ${listaCriptos[i].toUpperCase()} </h4>
        <p id="ars"> $${valor.ask} ARS </p>`
        
        fetch("https://criptoya.com/api/dolar")
        .then(response => response.json())
        .then(data => {
            const dol = {...data}
            dolar = parseFloat(dol.blue)
            let valorUsd = convertirANumero(document.querySelector(`#${listaCriptos[i]} p`).textContent) / dolar
            divCry.innerHTML +=
            `
            <p id="usd"> $${valorUsd.toFixed(2)} USD </p>
            <div class="botones">
                <p> CANT: </p>
                <input id="input" width="50" type="text" size="5">
            </div>
            `
        })
        
    })

}
//Evento buscador
texto.addEventListener("input", () => {
    for(let i = 0; i < listaCriptos.length; i++){
        let mostrar = document.querySelector(`#${listaCriptos[i]}1`)
        if(!listaCriptosNombres[i].includes(texto.value.toLowerCase()) ){
            mostrar.classList.add("inactivo")
            document.getElementById("body").style.height = "100%"
        }else{
            mostrar.classList.remove("inactivo")
            document.getElementById("body").style.height = "max-content"

        }
        if(texto.value == ""){
            mostrar.classList.remove("inactivo")
            document.getElementById("body").style.height = "max-content"
        }
    }
    
})
//Eventos botones de compra
for(let i = 0;i < listaCriptos.length; i++){
    let boton = document.getElementById(`boton${listaCriptos[i]}`)
    boton.addEventListener("click", () => {
        let valorInput = document.querySelector(`#${listaCriptos[i]}1 .botones input`).value
        verificarNumero(valorInput,listaCriptos[i])
    })
}


//FUNCIONES

//chequea si el valor ingresado en el input de cada crypto es un input valido y nuestra alerta correspondiente
function verificarNumero(valor,id){
    if(valor.includes(",")){
        Swal.fire({
            icon: 'error',
            title: `Valor Invalido`,
            text: "El valor de separacion es el punto \".\"",
          })
        document.querySelector(`#${id}1 .botones input`).value = ""
    }else{
        if(soloNumeros.test(valor)){
            let cantidadTotal = parseFloat(document.querySelector(`#${id}1 .botones input`).value)
            let costoFinalArs = (convertirANumero(document.querySelector(`#${id}1 #ars`).textContent) * cantidadTotal).toFixed(2)
            let costoFinalUsd = (convertirANumero(document.querySelector(`#${id}1 #usd`).textContent) * cantidadTotal).toFixed(2)
            
            Swal.fire({
                icon: 'success',
                title: `Compra realizada con exito`,
                text: `Compro ${cantidadTotal} ${id.toUpperCase()} a un costo total de $${costoFinalArs} ARS o $${costoFinalUsd} USD`
              })
              document.querySelector(`#${id}1 .botones input`).value = ""
        }else{
            Swal.fire({
                icon: 'error',
                title: `Valor invalido`,
              })
            document.querySelector(`#${id}1 .botones input`).value = ""
        }
    }
}
//Modifica el string recibido para retorar solo el numero
function convertirANumero(string){
    let valorFinal = ""

    for(let i = 0; i < string.length;i++){
        if(numerosYpunto.test(string[i])){
            valorFinal += string[i]
        }
    }
    return parseFloat(valorFinal)
}
