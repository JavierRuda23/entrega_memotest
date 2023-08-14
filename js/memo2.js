let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempoRegresivo = null;



let mostrarMovimientos = document.getElementById('movimientos')
let mostrarAciertos = document.getElementById('aciertos')
let mostrarTiempo = document.getElementById('t-restante')

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(() => {return Math.random() - 0.5})
console.log(numeros);

function contarTiempo(){
    tiempoRegresivo = setInterval (()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`
        if(timer == 0){
            clearInterval(tiempoRegresivo);
            bloquearTarjetas()
        }
    },1000)
}

function bloquearTarjetas(){
    for(let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="../img/${numeros[i]}.png">`;
        tarjetaBloqueada.disabled = true;
    }
}


function destapar(id){
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas)

    if(tarjetasDestapadas == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = `<img src="../img/${primerResultado}.png">`;
    
    
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas ==2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros [id];
        tarjeta2.innerHTML = `<img src="../img/${segundoResultado}.png">`;

        tarjeta2.disabled = true;

        movimientos++;
        
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            tarjetasDestapadas = 0;
            aciertos ++;
            mostrarAciertos.innerHTML = `Aciertos ${aciertos};`
            
        if(aciertos == 8){
            aciertos.innerHTML = `Aciertos ${aciertos};`;
            mostrarMovimientos.innerHTML = `Movimientos ${movimientos};`
        }
        
        }else{
            setTimeout(()=>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800);
        }
    } 
}












