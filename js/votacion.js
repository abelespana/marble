var puntuacion = 0;

function votarUno(){
    puntuacion++;
    document.getElementById("numeroincrementado").innerHTML = puntuacion;
    event.preventDefault();
}

