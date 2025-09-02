// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//chiediamo all'utente di inserire una parola
let word = prompt("inserisci una parola e ti dirò se è palindroma");
console.log(palindrome(word));


//funzione per verificare se la parola è palindroma
function palindrome(word) {
    // var di stringa revertata
    let revertedWord = "";

    // ciclo la stringa
    for (let i = word.length - 1; i >= 0; i--) {
        let letteraIesima = word[i];
        // console.log(letteraIesima);
        revertedWord += letteraIesima;
    }
    if (word === revertedWord){
        console.log("si, la parola" , word , "è palindroma");
    } else {
        console.log("no, la parola" , word , "non è palindroma");
        
    }
    return word + " " + revertedWord;
}
