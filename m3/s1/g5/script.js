var Chiamata = /** @class */ (function () {
    function Chiamata(id, durata, data) {
        this.id = id;
        this.durata = durata;
        this.data = data;
    }
    return Chiamata;
}());
var Smartphone = /** @class */ (function () {
    function Smartphone(carica, numeroChiamate) {
        this.costoMinuto = 0.1;
        this.registroChiamate = [];
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    Smartphone.prototype.mostraRegistroChiamate = function () {
        console.log(this.registroChiamate);
    };
    Smartphone.prototype.filtraChiamatePerDataOra = function (data, ora) {
        var chiamateFiltrate = [];
        this.registroChiamate.forEach(function (call) {
            if (data == call.data.getDate() && ora == call.data.getHours()) {
                chiamateFiltrate.push(call);
            }
        });
        if (chiamateFiltrate.length == 0) {
            console.log("%cNON CI SONO RISULTATI", "color:red");
        }
        else {
            console.log("%cCI SONO " + chiamateFiltrate.length + " RISULTATI", "color:green");
            console.log(chiamateFiltrate);
        }
    };
    Smartphone.prototype.ricarica = function (euro) {
        this.carica += euro;
        console.log("%cRICARICA DI " + euro + "€" + " EFFETTUATA CORRETTAMENTE", "color: lightgreen");
    };
    Smartphone.prototype.numero404 = function () {
        return "CREDITO RESIDUO: " + this.carica + "€";
    };
    Smartphone.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Smartphone.prototype.chiamata = function (min) {
        var costoChiamata = this.costoMinuto * min;
        if (costoChiamata < this.carica) {
            console.log("COSTO DELLA CHIAMATA: %c" + costoChiamata + "€", "color: orange");
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            var now = new Date();
            this.registroChiamate.push(new Chiamata(this.numeroChiamate, min, now));
        }
        else if (costoChiamata == this.carica) {
            console.log("COSTO DELLA CHIAMATA: %c" + costoChiamata + "€", "color: orange");
            console.log("%cATTENZIONE CREDITO AZZERATO!", "color: red");
            this.carica -= costoChiamata;
            this.numeroChiamate++;
        }
        else if (costoChiamata > this.carica) {
            console.log("%cATTENZIONE CREDITO INSUFFICIENTE!", "color: red");
        }
    };
    Smartphone.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
        console.log("CHIAMATE AZZERATE CON SUCCESSO");
    };
    return Smartphone;
}());
console.warn("IPHONE");
var IPhone = new Smartphone(0, 0);
IPhone.ricarica(50);
IPhone.chiamata(10);
IPhone.chiamata(10);
console.log(IPhone.getNumeroChiamate());
IPhone.mostraRegistroChiamate();
IPhone.filtraChiamatePerDataOra(26, 13);
IPhone.filtraChiamatePerDataOra(26, 12);
console.warn("SAMSUNG");
var Samsung = new Smartphone(0, 0);
Samsung.ricarica(60);
Samsung.chiamata(500);
Samsung.chiamata(50);
Samsung.chiamata(50);
console.log(Samsung.numero404());
console.log(Samsung.getNumeroChiamate());
Samsung.azzeraChiamate();
console.log(Samsung.getNumeroChiamate());
Samsung.mostraRegistroChiamate();
console.warn("XIAOMI");
var Xiaomi = new Smartphone(0, 0);
Xiaomi.chiamata(10);
