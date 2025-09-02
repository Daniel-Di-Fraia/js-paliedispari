// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


//facciamo scegliere all'utente pari o dispari e un numero tra 1 e 5
let puntata = prompt("Scegli tra pari o dispari!").toLowerCase();
let userNum = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log("hai scelto:" , puntata);
console.log("hai scelto il numero:" , userNum);

//valore casuale del pc
let pcNum = randomVal();
console.log("Il numero della macchina è:" , pcNum);

//somma del numero inserito dall'utente e il valore casuale del pc
let totale = userNum + pcNum;
console.log("La somma tra i 2 numeri è:" , totale);

//variabile per verificare il vincitore
let check;

//stampa del risultato, se pari o dispari
console.log(pariDispari(totale));

//condizioni per verificare chi ha vinto
if(check === puntata){
    console.log("Bravo! Hai vinto.");
} else {
    console.log("Noo! Hai perso.");
}

// funzione per il numero random da 1 a 5 che darà la macchina
function randomVal() {
    return Math.floor(Math.random() * 5) + 1;
}

//funzione per verificare se il risultato è pari o dispari
function pariDispari(totale){ 
    if(totale % 2 === 0){
        check = "pari";
    } else {
        check = "dispari";
    }
    return check;
}
