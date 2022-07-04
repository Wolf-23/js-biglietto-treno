// Inserire KM da percorrere
const kilometriDaFare = parseInt(prompt("Inserisci i chilometri che vuoi percorrere: "));

// Inserire età passeggero
const eta = parseInt(prompt("Inserisci la tua età: "));

// Prezzo singolo Kilometro
const prezzoKilometro = 0.21;

// Calcolo Prezzo Intero 
let prezzoIntero = (kilometriDaFare * prezzoKilometro);
prezzoIntero = prezzoIntero.toFixed(2);

// Calcolo Percentuali
const percentualeMinorenne = (20 / 100);
const percentualeOver = (40 / 100);

// Applicazione Sconti
if (eta === 0 || eta > 105) {
    alert("Inserisci un età valida e riprova!")
}
else if (eta < 18) {
    let scontoMinorenni = (percentualeMinorenne * prezzoIntero);
    let prezzoMinorenni = (prezzoIntero - scontoMinorenni);
    prezzoMinorenni = prezzoMinorenni.toFixed(2);
    alert("Hai diritto al 20%  di sconto. Pagherai " + prezzoMinorenni + "€");
} 
else if (eta >= 65) {
    let scontoOver = (percentualeOver * prezzoIntero);
    let prezzoOver = (prezzoIntero - scontoOver)
    prezzoOver = prezzoOver.toFixed(2);
    alert("Hai diritto al 40%  di sconto. Pagherai " + prezzoOver + "€");
}
else {
    alert("Non hai diritto allo sconto. Pagherai " + prezzoIntero + "€");
}