
let iniciado = false


function onKeyDownHandler(event) {

    var codigo = event.which || event.keyCode;

    console.log("Presionada: " + codigo); // Codigo es la tecla que pulsamos
    
    /*

    if(codigo === 13){
      console.log("Tecla ENTER");
    }

    if(codigo >= 65 && codigo <= 90){
      console.log(String.fromCharCode(codigo));
    }
    
    */

    if (codigo === 82 && !iniciado){ // Tecla R
        console.log("Iniciando Juego");
        let width = 20
        let height = 20
        iniciado = true
        generateCanvas(width, height);
    }
    if (codigo === 65){ // Tecla A
        console.log("Tecla a presionada");
        drawBlock(generateNewRandomBlock());
    }
    if (codigo === 87){ // Tecla W
        console.log("Tecla w presionada");
        generateRandomBlock();
    }
    if (codigo === 83){ // Tecla S
        console.log("Tecla s presionada");
    }
    if (codigo === 68){ // Tecla D
        console.log("Tecla d presionada");
    }
     
}


// Genero una cuadricula de 20 * 20 con un id 
// cada cuadrado que se divide en 2 partes separadas por un 0 
// Ej: 102 primera fila segunda columna
// Ej: 1609 16 fila, 9 columna
// Ej: 19014 19 fila, 14 columna
function generateCanvas(width, height) { 
    let id = 0;
    for(let i = 1; i <= height; i++){
        document.getElementById("canvas").innerHTML += "<tr id='"+i+"f'>";
        for(let j = 1; j <= width; j++){
            id = String(i) + "-" + String(j);
            document.getElementById(i+ "f").innerHTML += "<td id='" + id + "' style='background-color: black;'></td>";
        }
        document.getElementById("canvas").innerHTML += "</tr>";
    }
}

function drawBlock(id){

    document.getElementById(id).style.backgroundColor = "white";
}

function generateNewRandomBlock(){

    let numero = "0";
    let intentos = 0;
    // Necesito 2 numeros del 1 al 20 aleatorios 
    while (true){
        numero = Math.floor(Math.random() * 20 + 1) + "-" + Math.floor(Math.random() * 20 + 1);
        if (document.getElementById(numero).style.backgroundColor == "black"){
            return numero;
        } else if (intentos >= 2000){
            console.log("Demasiados intentos")
            return null;
        }
        intentos++;
    }
}


