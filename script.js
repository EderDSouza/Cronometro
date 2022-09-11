
var segundos = 0;
var minutos = 0;
var milesimo=0;
var interval;



function start(){
    clearInterval(interval);
    interval = setInterval(contador,10);
    

};

function pausar(){

    clearInterval(interval);

};

function reset(){
    clearInterval(interval);
    milesimo="00";
    segundos="00";
    minutos="00";
    document.getElementById("num_milesimo").innerText= milesimo
    document.getElementById("num_segundos").innerText= segundos
    document.getElementById("num_minutos").innerText= minutos

};

function contador(){
    milesimo++;

    if(milesimo == 60){
        segundos++
        milesimo=0;
        document.getElementById("num_segundos").innerText= segundos

        if(segundos == 60){
            minutos++
            segundos=0;
            document.getElementById("num_minutos").innerText= minutos
        };
    };


    document.getElementById("num_milesimo").innerText= milesimo

    
    
}








