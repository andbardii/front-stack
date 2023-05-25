// CLASSE SINGOLO CAPO
var Capo = /** @class */ (function () {
    function Capo(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.mostraPrezzo();
    }
    Capo.prototype.mostraPrezzo = function () {
        console.log('%cMOSTRA PRODOTTO', 'color: orange');
        console.log("NOME: " + this.capo);
        console.log("Prezzo con IVA: %c" + +this.prezzoivainclusa + "$", 'color: red');
    };
    return Capo;
}());
// FETCH GENERALE CAPI
fetch("assets/Abbigliamento.json")
    .then(function (res) {
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error("ERRORE NEL CARICAMENTO DELLA FETCH");
    }
})
    .then(function (res) {
    console.warn("ARRAY DELLA FETCH");
    console.log(res);
    handlePage(res);
})
    .catch(function (err) {
    console.error(err);
});
var handlePage = function (capi) {
    var nuovoArray = [];
    capi.forEach(function (element) {
        var nuovoCapo = new Capo(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
        nuovoArray.push(nuovoCapo);
        console.log(nuovoCapo);
    });
    console.warn("NUOVO ARRAY TIPIZZATO");
    console.log(nuovoArray);
};
