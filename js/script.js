console.log('JS OK')

/* 
1 - dichiarare un variabile km e etá
2 - chiedere all'utente km e etá 
3 - Calcolare il prezzo del biglietto
4 - Creare lo sconto per l'etá
5 - Creare il prezzo finale
6 - Stampare in pagina il prezzo
*/

const countKm = parseFloat(prompt("Quanto chilometri deve percorrere?"));
const passAge = parseInt(prompt("Quanto anni ha?"));

let prezzoBase = countKm * 0.21;

if (passAge < 18) {
    prezzoBase -= prezzoBase * 0.2;
} else if (passAge >= 65) {
    prezzoBase -= prezzoBase * 0.4;
}

let prezzoFinale = prezzoBase.toFixed(2);

console.log("Il prezzo del biglietto è di: €" + prezzoFinale);