var capo = /** @class */ (function () {
    function capo(id, codprod, collezione, capo, modello, quantita, colore, prezzoIvaEsclusa, prezzoIvaInclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoIvaEsclusa = prezzoIvaEsclusa;
        this.prezzoIvaInclusa = prezzoIvaInclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    capo.prototype.getPrezzoCapo = function () {
        throw new Error("Not implemented. (getPrezzoCapo())");
    };
    capo.prototype.getAcquistoCapo = function () {
        throw new Error("Not implemented. (getAcquistoCapo())");
    };
    return capo;
}());
