/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
console.log("ESERCIZIO 1")
function area(l1, l2) {
    return l1 * l2
}

console.log(area(8, 3))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
console.log("ESERCIZIO 2")
function crazySum(a, b) {
    if (a === b) {
        return (a + b)*3
    }else{
        return a + b
    }
}

console.log(crazySum(2, 3))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 3")
function crazyDiff(numero) {
    if (numero > 19) {
        return Math.abs((numero - 19)*3)
    }else{
        return Math.abs(numero - 19)
    }
}

console.log(crazyDiff(10))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 4")
function boundary(n) {
    if (n >= 20 && n <= 100) {
        return true
    }else if (n == 400) {
        return true
    }else{
        return false
    }
}

console.log(boundary(89))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 5")
function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
        return stringa
    }else{
        return (`EPICODE${stringa}`)
    }
}

console.log(epify(", bootcamp per diventare developer!"))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 6")
function check3and7(numeroPositivo) {
    if (numeroPositivo >= 0){
        if (numeroPositivo % 3 === 0 || numeroPositivo % 7 === 0) {
            return true
        }else{
            return false
    }}else{
        return "Scegliere un numero positivo"}
}

console.log(check3and7(-21))
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 7")
function reverseString(stringa) {
    let agnirts = ""
    for (let i = stringa.length - 1; i >= 0; i--) {
        agnirts += stringa[i]
    }
    return agnirts
}
console.log(reverseString("EPICODE"))
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 8")
function upperFirst(stringa) {
    let paroleStringa = stringa.split(" ")
    console.log(paroleStringa)
    
    for (let i = 0; i < paroleStringa.length; i++) {
       paroleStringa[i] = paroleStringa[i].charAt(0).toUpperCase() + paroleStringa[i].slice(1)
    }
}
upperFirst("ciao ePICODE")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 9")
function cutString(stringa) {
    stringa = stringa.slice(1, stringa.length - 1)
    return stringa
}

console.log(cutString("trovare"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("ESERCIZIO 10")
function giveMeRandom(n) {
    for (let i = 0; i < n; i++) {
    console.log(Math.floor(Math.random() * 10))
}}
giveMeRandom(3)