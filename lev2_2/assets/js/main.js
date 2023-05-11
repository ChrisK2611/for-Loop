const output = document.querySelector(".outputLoop");


let fancyLoop = "";
const startLoop = () => {
    event.preventDefault();
    const inputVorschleife = Number(document.querySelector("#loop").value);

    //Schleife läuft so oft durch wie Value angegeben wird
     for(let i = 1; i <= inputVorschleife; i++){
    //fügt so viele "o" hinzu wie eingegeben   
       fancyLoop += "o";
    //schreibt es ins HTML   
       output.innerHTML = `L${fancyLoop}p`;
} 
    //resetet Array
        fancyLoop = "";
}