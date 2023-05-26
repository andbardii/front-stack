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
            var now = new Date();
            this.registroChiamate.push(new Chiamata(this.numeroChiamate, min, now));
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
//! GESTIONE CONSOLE 
console.warn("IPHONE");
var IPhone = new Smartphone(0, 0);
IPhone.ricarica(50);
// IPhone.chiamata(10)
// IPhone.chiamata(10)
// console.log(IPhone.getNumeroChiamate())
// IPhone.mostraRegistroChiamate()
// IPhone.filtraChiamatePerDataOra(26, 13)
// IPhone.filtraChiamatePerDataOra(26, 12)
console.warn("SAMSUNG");
var Samsung = new Smartphone(0, 0);
// Samsung.ricarica(60)
// Samsung.chiamata(500)
// Samsung.chiamata(50)
// Samsung.chiamata(50)
// console.log(Samsung.numero404())
// console.log(Samsung.getNumeroChiamate())
// Samsung.azzeraChiamate()
// console.log(Samsung.getNumeroChiamate())
// Samsung.mostraRegistroChiamate()
console.warn("XIAOMI");
var Xiaomi = new Smartphone(0, 0);
// Xiaomi.chiamata(10)
//! GESTIONE INDEX
var target = document.querySelector("#screen");
var phoneApp = document.querySelector("#gestione-smartphone");
phoneApp === null || phoneApp === void 0 ? void 0 : phoneApp.addEventListener("click", function () {
    target.innerHTML = "";
    var insidePhoneApp = document.createElement("div");
    insidePhoneApp.classList.add("container-fluid", "h-100");
    insidePhoneApp.innerHTML = "<div class=\"row p-2 h-100\">\n                                <div class=\"col-12 fw-bold\" id=\"credito-rimasto\">".concat(IPhone.numero404(), "</div>\n                                <div class=\"col-12 btn btn-success mb-2 shadow\" id=\"btn-ricarica\">RICARICA VELOCE (10\u20AC)</div>\n                                <div class=\"col-12 btn btn-danger shadow\" id=\"btn-svuota\">CANCELLA CHIAMATE</div>\n                                \n                                <div class=\"col-12 fw-bold text-secondary\"><span>CHIAMATE EFFETTUATE: </span><span id=\"num-chiamate\">").concat(IPhone.getNumeroChiamate(), "</span></div>\n                                <div class=\"col-12 h-50\">\n                                <div class=\"row overflow-auto h-100\" id=\"chiamate\">\n\n                                </div>\n                                </div>\n                                <div class=\"col-12 text-center generic-app\" id=\"bottone-chiama\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"35\" height=\"35\" fill=\"green\" class=\"bi bi-telephone-fill\" viewBox=\"0 0 16 16\">\n                                        <path fill-rule=\"evenodd\" d=\"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z\"/>\n                                </svg>\n                                </div>\n                                </div>\n                                ");
    target.appendChild(insidePhoneApp);
    var bottoneChiama = insidePhoneApp.querySelector("#bottone-chiama");
    var targetChiamate = insidePhoneApp.querySelector("#chiamate");
    var numeroChiamate = insidePhoneApp.querySelector("#num-chiamate");
    var creditoRimasto = insidePhoneApp.querySelector("#credito-rimasto");
    bottoneChiama === null || bottoneChiama === void 0 ? void 0 : bottoneChiama.addEventListener("click", function () {
        numeroChiamate.innerHTML = "";
        numeroChiamate.innerHTML = "".concat(IPhone.getNumeroChiamate());
        creditoRimasto.innerHTML = "";
        creditoRimasto.innerHTML = "".concat(IPhone.numero404());
        IPhone.chiamata(Math.floor(Math.random() * 50));
        targetChiamate.innerHTML = "";
        IPhone.registroChiamate.forEach(function (call) {
            var dChiamata = document.createElement("div");
            dChiamata.classList.add("col-12", "border-bottom", "border-secondary");
            dChiamata.innerHTML = "<span class=\"me-2 fw-bold\">".concat(call.id, ")</span> <span class=\"me-2\">").concat(call.durata, "</span class=\"me-2\"> <span>").concat(call.data, "</span>");
            targetChiamate.appendChild(dChiamata);
        });
    });
    var bottoneCarica = insidePhoneApp.querySelector("#btn-ricarica");
    bottoneCarica === null || bottoneCarica === void 0 ? void 0 : bottoneCarica.addEventListener("click", function () {
        IPhone.ricarica(10);
        creditoRimasto.innerHTML = "";
        creditoRimasto.innerHTML = "".concat(IPhone.numero404());
    });
    var bottoneSvuota = insidePhoneApp.querySelector("#btn-svuota");
    bottoneSvuota === null || bottoneSvuota === void 0 ? void 0 : bottoneSvuota.addEventListener("click", function () {
        IPhone.azzeraChiamate();
        numeroChiamate.innerHTML = "";
        numeroChiamate.innerHTML = "".concat(IPhone.getNumeroChiamate());
        targetChiamate.innerHTML = "";
    });
});
