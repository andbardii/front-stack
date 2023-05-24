var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//* CLASSE ASTRATTA
var LavoratoreAutonomo = /** @class */ (function () {
    function LavoratoreAutonomo(codRedd, redditoAnnuoLordo, tasseInps, tasseIrpef, professione) {
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
        this.professione = professione;
    }
    return LavoratoreAutonomo;
}());
//* CLASSE MURATORE
var MuratoreAutonomo = /** @class */ (function (_super) {
    __extends(MuratoreAutonomo, _super);
    function MuratoreAutonomo(redditoAnnuoLordo) {
        return _super.call(this, 0.3, redditoAnnuoLordo, 0.1, 0.12, "Muratore") || this;
    }
    MuratoreAutonomo.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo * this.codRedd;
    };
    MuratoreAutonomo.prototype.getTasselnps = function () {
        return this.getUtileTasse() * this.tasseInps;
    };
    MuratoreAutonomo.prototype.getTasselrpef = function () {
        return this.getUtileTasse() * this.tasseIrpef;
    };
    MuratoreAutonomo.prototype.getRedditoAnnuoNetto = function () {
        var redditoNetto = this.redditoAnnuoLordo - this.getTasselnps() - this.getTasselrpef();
        console.log("IL TUO REDDITO NETTO:");
        console.log(redditoNetto + "$");
    };
    return MuratoreAutonomo;
}(LavoratoreAutonomo));
//* CLASSE INFORMATICO 
var InformaticoAutonomo = /** @class */ (function (_super) {
    __extends(InformaticoAutonomo, _super);
    function InformaticoAutonomo(redditoAnnuoLordo) {
        var _this = _super.call(this, 0.75, redditoAnnuoLordo, 0.15, 0.16, "Informatico") || this;
        _this.redditoAnnuoLordo = redditoAnnuoLordo;
        return _this;
    }
    InformaticoAutonomo.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo * this.codRedd;
    };
    InformaticoAutonomo.prototype.getTasselnps = function () {
        return this.getUtileTasse() * this.tasseInps;
    };
    InformaticoAutonomo.prototype.getTasselrpef = function () {
        return this.getUtileTasse() * this.tasseIrpef;
    };
    InformaticoAutonomo.prototype.getRedditoAnnuoNetto = function () {
        var redditoNetto = this.redditoAnnuoLordo - this.getTasselnps() - this.getTasselrpef();
        console.log("IL TUO REDDITO NETTO:");
        console.log(redditoNetto + "$");
    };
    return InformaticoAutonomo;
}(LavoratoreAutonomo));
// NEW MURATORE AUTONOMO
var AlfredoMuratoreAutonomo = new MuratoreAutonomo(90000);
console.log("Data la professione di: " + AlfredoMuratoreAutonomo.professione);
console.log("Con un reddito lordo di: " + AlfredoMuratoreAutonomo.redditoAnnuoLordo);
AlfredoMuratoreAutonomo.getRedditoAnnuoNetto();
console.log("Hai pagato all'INPS: " + AlfredoMuratoreAutonomo.getTasselnps() + "$");
console.log("Hai pagato per l'IRPEF: " + AlfredoMuratoreAutonomo.getTasselrpef() + "$");
// NEW INFORMATICO AUTONOMO
var GiovanniInformaticoAutonomo = new InformaticoAutonomo(70000);
console.log("Data la professione di: " + GiovanniInformaticoAutonomo.professione);
console.log("Con un reddito lordo di: " + GiovanniInformaticoAutonomo.redditoAnnuoLordo);
GiovanniInformaticoAutonomo.getRedditoAnnuoNetto();
console.log("Hai pagato all'INPS: " + GiovanniInformaticoAutonomo.getTasselnps() + "$");
console.log("Hai pagato per l'IRPEF: " + GiovanniInformaticoAutonomo.getTasselrpef() + "$");
