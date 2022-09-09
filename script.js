
var segundos = 00;


function start(){
    setInterval(contador,100)

};

function pausar(){
    console.log("iniciou")

};

function reset(){
    console.log("iniciou")

};

function contador(){
    
    segundos ++
    document.getElementById("num_segundos").innerText= segundos
    
};




