const numeroDiKm = parseInt(prompt("Inserire Kilometri da percorrere"));

const eta = parseInt(prompt("Inserire la propria età"));

let prezzoBi = 0.21;

let prezzoTot = numeroDiKm * prezzoBi;

let prezzoMinore = prezzoTot - (prezzoTot * (20/100));

let prezzoOver = prezzoTot - (prezzoTot * (40/100));


if(eta < 18){
    document.getElementById("price").innerHTML = "Il prezzo del tuo biglietto è: " + (prezzoMinore) + "€";
    document.getElementById("discount").innerHTML = "Hai avuto diritto ad uno sconto del 20%";
} else if{
    document.getElementById("price").innerHTML = "Il prezzo del tuo biglietto è: " + (prezzoMinore) + "€";
    document.getElementById("discount").innerHTML = "Hai avuto diritto ad uno sconto del 40%";
};