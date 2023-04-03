//! DIRETTIVE DI OUTPUT
document.getElementById("testo").innerHTML = 'Hello Guys';
document.getElementById("testo2").innerText = 'Hello';
console.log('Hello World')

// ALERT è bloccante
window.alert('Hello Budy')

// WRITE crea molti problemi, quindi è sconsigiato
document.write("<b>Ciao Mondo</b>")

document.getElementById("somma").innerHTML = 3 + 2;

//! CREAZIONE VARIABILI
var nomeVariabile = 5;
console.log(nomeVariabile)

//! OPERTATORI
/* =    operatore di assegnamento */
/* +    operatore di somma */
/* -    operatore di sottrazione */

//! TIPI DI DATI 
// number   = Numero (1)
// string   = Testo ('Uno'; '1')
// boolean  = True / False
// arrey    = []
// object   = {}
 
// Genera una stringa che indica il tipo di dato dell'oggetto indicato
console.log(typeof {nomeVariabile})

//! INFORMAZIONI AGGIUNTIVE
// JS è un linguaggio di programmazione
// JS è un linguaggio a tipizzazione debole
// Interattività con DOM (Oggetti HTML)
// JS è un linguaggio lato client, cioè viene eseguito direttamente dal nostro pc
