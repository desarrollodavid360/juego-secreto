 //En esta version se hizo la reduccion de nuestro codigo.

//  let titulo = document.querySelector('h1');
//  titulo.innerHTML = 'Juego del número secreto';

//  let parrafo = document.querySelector('p');
//  parrafo.innerHTML = "Ingrese un número del 1 al 10.";
// let numeroSecreto = generarNumeroSecreto(); //La variable numeroSecreto aquí es de ámbito o alcance global.
//Aqui se cambiaron de valores ya que la funcion de condicionesIniciales se encargara de darle el valor correcto.
let numeroSecreto = 0;
// console.log(numeroSecreto);
// let intentos = 1;
let intentos = 0;

let listaNumerosSorteados = [];

let numeroMaximo = 10;

function asignarTextoAlElemento(elemento,texto){
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}


 ///La funcion es la encapsulacion de una accion que queremos que haga
 //de preferencia que haga una accion 
function verificarIntento(){
   //  let numeroDelUsuario = document.querySelector('input');
   let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
  //  console.log(numeroDelUsuario);
  //  console.log(typeof(numeroDelUsuario));
  numeroDelUsuario==numeroSecreto
  //  console.log(typeof(numeroSecreto));
  //  console.log(numeroDelUsuario==numeroSecreto);
  //Este console servira para ver el numero de intentod
  console.log(intentos);
   if(numeroDelUsuario===numeroSecreto){
    asignarTextoAlElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez.' : 'veces'}`); 
    document.getElementById('reiniciar').removeAttribute('disabled');
   }else{
  //El usuario no acerto
    if(numeroDelUsuario>numeroSecreto){
      asignarTextoAlElemento('p','El número secreto es menor.');
    }else{
      asignarTextoAlElemento('p','El número secreto es mayor.'); 
    }
    intentos+=1;
    limpiarCaja();
   }
    return;
}


//  function limpiarCaja(){
//   let valorCaja = document.querySelector('#valorUsuario')
//   valorCaja.value = '';
//  }

function limpiarCaja(){
  let valorCaja = document.querySelector('#valorUsuario').value = '';
}

//Las variables que se encuentran dentro de una funcion son variable de ámbito o alcance de bloque
//  function generarNumeroSecreto(){
//    let numeroSecreto =  Math.floor(Math.random()*10)+1;
//    return numeroSecreto;
//  }

function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
  // return Math.floor(Math.random()*10)+1;
 
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  //si ya estan sorteos todos los numeros
  if(listaNumerosSorteados.length === numeroMaximo){
    asignarTextoAlElemento('p','Ya se sortearon todos los numeros posibles');
  }else{
    //continuamos jugando
    //Si el numero genarado esta incluido en la lista hacemos una operacion si no se hace otra.
    //Usaremos el metodo de js llamado include-->checa en la lista si el valor ya se encuentra
    //barrer y recorrer todo el arreglo y verficar si ya existe por tanto devuelve un tru o false-->booleano
    if(listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else{
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales(){
  asignarTextoAlElemento('h1','Juego del número secreto');
  asignarTextoAlElemento('p',`Ingrese un número del 1 al ${numeroMaximo}.`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego(){
  //limpiar caja
  limpiarCaja();
  //Indicar mensaje de intervalo de números
  //Generar el número aleatorio
  //Inicializar el número intentos
  condicionesIniciales();
  //Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


