const sectionReinicio = document.getElementById("Reiniciar")
const sectionSeleccionarAtaque = document.getElementById("Seleccionar_ataque")
const botonMascotaJugador = document.getElementById('boton-mascota')

const botonReinicio = document.getElementById("boton_reiniciar")

const sectionSeleccionarMascota = document.getElementById("Seleccionar_mascota")

const spanMascotaJugador = document.getElementById("mascota-jugador")

const spanMascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemmigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultados")
const ataqueDelJugador = document.getElementById("ataque-Del-Jugador")
const ataqueDelEnemigo = document.getElementById("ataque-Del-Enemigo")
const contenedorTarjetas = document.getElementById("contenedorDeTarjetas")
const contenedorAtaque = document.getElementById("contenedorDeAtaques")
const sectionVerMapa = document.getElementById("verMapa")
const mapa = document.getElementById("mapa")


let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputAqua
let inputTerrax
let inputFlama
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo

let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }

}

let aqua = new Mokepon("Aqua", './img/mokepons_mokepon_hipodoge_attack.webp', 5)

let terrax = new Mokepon("Terrax", './img/mokepons_mokepon_capipepo_attack.webp', 5)

let flama = new Mokepon("Flama", './img/mokepons_mokepon_ratigueya_attack.webp', 5)


aqua.ataques.push(
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '🔥', id: 'boton_fuego' },
    { nombre: '🌍', id: 'boton_tierra' }
)

terrax.ataques.push(
    { nombre: '🌍', id: 'boton_tierra' },
    { nombre: '🌍', id: 'boton_tierra' },
    { nombre: '🌍', id: 'boton_tierra' },
    { nombre: '🔥', id: 'boton_fuego' },
    { nombre: '💧', id: 'boton_agua' },
)
flama.ataques.push(
    { nombre: '🔥', id: 'boton_fuego' },
    { nombre: '🔥', id: 'boton_fuego' },
    { nombre: '🔥', id: 'boton_fuego' },
    { nombre: '💧', id: 'boton_agua' },
    { nombre: '🌍', id: 'boton_tierra' },
)

mokepones.push(aqua, terrax, flama)

function iniciarJuego() {
    sectionReinicio.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name = "mascotas" id = ${mokepon.nombre} />
        <label class = "tarjeta-de-mokepon" for = ${mokepon.nombre}> 
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>`
        contenedorTarjetas.innerHTML += opcionDeMokepones


        inputAqua = document.getElementById("Aqua")
        inputTerrax = document.getElementById("Terrax")
        inputFlama = document.getElementById("Flama")
    })

    sectionSeleccionarAtaque.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReinicio.addEventListener('click', reiniciarJuego)

}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputAqua.checked) {
        spanMascotaJugador.innerHTML = inputAqua.id
        mascotaJugador = inputAqua.id

    } else if (inputTerrax.checked) {
        spanMascotaJugador.innerHTML = inputTerrax.id
        mascotaJugador = inputTerrax.id
    } else if (inputFlama.checked) {
        spanMascotaJugador.innerHTML = inputFlama.id
        mascotaJugador = inputFlama.id
    } else {
        alert("Debe seleccionar una mascota")
        location.reload()

    }
    extraerAtaque(mascotaJugador)
    seleccionarMascotaEnemigo()
}


function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre

    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()

}

function extraerAtaque(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }

    }
    mostrarAtaques(ataques)

}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class= "boton-de-ataque BAtaque">
            ${ataque.nombre}
        </button>`

        contenedorAtaque.innerHTML += ataquesMokepon

    })

    botonFuego = document.getElementById("boton_fuego")
    botonAgua = document.getElementById("boton_agua")
    botonTierra = document.getElementById("boton_tierra")
    botones = document.querySelectorAll(".BAtaque")


    console.log(botones)
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
         //   switch (e.target.textContent.trim()) {
            //    case '🔥':
                //    console.log(e)
                //    ataqueJugador.push('🔥')
                ///    console.log('FUEGO', ataqueJugador)
                 //   boton.style.background = '#112f58'
                //    break;
              //  case '💧':
              //      ataqueJugador.push('💧')
              //      console.log('AGUA', ataqueJugador)
               //     boton.style.background = '#112f58'
                 //   break;
             //   case '🌍':
               //     ataqueJugador.push('🌍')
                ///    console.log('TIERRA', ataqueJugador)
             ///       boton.style.background = '#112f58'
               //     break;
             //   default:
             //       alert('EL atque no existe')
             //       break;

            //}
             if (e.target.textContent.trim() === '🔥') {
                 console.log(e)
                 ataqueJugador.push('FUEGO')
                 console.log('FUEGO', ataqueJugador)
                 boton.style.background = '#112f58'
                 boton.disabled = true
                 
             }
             else if (e.target.textContent.trim() === '💧') {
                 ataqueJugador.push('AGUA')
                 console.log('AGUA', ataqueJugador)
                 boton.style.background = '#112f58'
                 boton.disabled = true
                 
             } 
             else{
                 ataqueJugador.push('TIERRA')

                 console.log('TIERRA', ataqueJugador)
                 boton.style.background = '#112f58'
                 boton.disabled = true
                 
             }
             seleccionarAtaqueEnemigo()
        })
    })
    
}

function seleccionarAtaqueEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push("FUEGO") 

    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push("AGUA")

    } else {
        ataqueEnemigo.push("TIERRA")

    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate()
    }

}

function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]

}
function combate() {

    for(let index = 0; index < ataqueJugador.length; index++){
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje("EMPATE")
        } else if(ataqueJugador[index]== "FUEGO" && ataqueEnemigo[index] == "TIERRA"){
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador

        }else if (ataqueJugador[index] == "AGUA" && ataqueEnemigo[index] == "FUEGO") {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
    
        } else if (ataqueJugador[index] == "TIERRA" && ataqueEnemigo[index] == "AGUA") {
            indexAmbosOponentes(index,index)
            crearMensaje("GANASTE")
            victoriasJugador ++
            spanVidasJugador.innerHTML =victoriasJugador
        } else {
            indexAmbosOponentes(index,index)
            crearMensaje("---->PERDISTE")
            victoriasEnemigo ++
            spanVidasEnemmigo.innerHTML =  victoriasEnemigo
        }
    }


    revisarVictorias()
}

function revisarVictorias() {
    if (victoriasJugador == victoriasEnemigo) {
        crearMensajeFinal("EMPATE")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES, GANASTE")
    }else{
        crearMensajeFinal("LO SIENTO, PERDISTE")
    }

}
function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    // let parrafo = document.createElement('p')
    //parrafo.innerHTML = "Tu mascota ataco con "+ ataqueJugador+ ", la mascota enemiga ataco con "+ ataqueEnemigo + " "+resultado
    ataqueDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

}
function crearMensajeFinal(resultado) {
    sectionReinicio.style.display = 'flex'
    let parrafo = document.createElement('h2')
    sectionMensajes.innerHTML = resultado
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
