//! OGGETTI 
// Struttura che permetti di raggruppare una serie di dati all'interno di una variabile.

{
let pizza = {
    gusto : 'Magherita',    // Coppia (chiave - valore), La "chiave" viene chiamata "proprietà" (gusto = proprietà)
    prezzo : 5,
    aggiunte : {
        bufala : 1.5,
        doppiaMozzarella : 1,
        basilico : 0.5,
    },
    mostraPrezzo : function(){
        console.log(`Il prezzo della pizza ${this.gusto} è pari a ${this.prezzo}`)
    },
                 
}

// Lancio della funzione
pizza.mostraPrezzo()

//? Accedere alle proprietà in lettura

console.log(pizza.gusto)

//? Accedere alle proprietà in scrittura

    pizza.gusto = 'Diavola'
    console.log(pizza.gusto)

    alert()                         // funzione
    document.getElementById()       // oggetto.metodo
}

