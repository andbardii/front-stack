//* CLASSE ASTRATTA
abstract class LavoratoreAutonomo {

    codRedd: number;
    redditoAnnuoLordo: number;
    tasseInps: number;
    tasseIrpef: number;

    constructor(codRedd: number, redditoAnnuoLordo: number, tasseInps: number, tasseIrpef: number){
        this.codRedd = codRedd;
        this.redditoAnnuoLordo = redditoAnnuoLordo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }

    abstract getUtileTasse(): number;
    abstract getTasselnps(): number;
    abstract getTasselrpef(): number;
    abstract getRedditoAnnuoNetto(): void;

}

//* CLASSE MURATORE
class MuratoreAutonomo extends LavoratoreAutonomo{


    constructor(redditoAnnuoLordo:number){
        super(0.3, redditoAnnuoLordo, 0.1, 0.12 );
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }

    getUtileTasse(): number {
        return this.redditoAnnuoLordo * this.codRedd
    }
    getTasselnps(): number {
        return this.getUtileTasse() * this.tasseInps
    }
    getTasselrpef(): number {
        return this.getUtileTasse() * this.tasseIrpef
    }
    getRedditoAnnuoNetto(): void {
        let redditoNetto = this.redditoAnnuoLordo - (this.getTasselnps() + this.getTasselrpef())
        console.log("IL TUO REDDITO NETTO:")
        console.log(redditoNetto + "$")
    }

}

// NEW MURATORE AUTONOMO
let AlfredoMuratoreAutonomo = new MuratoreAutonomo(90000)
 
AlfredoMuratoreAutonomo.getRedditoAnnuoNetto()

console.log("Hai pagato all'INPS: " + AlfredoMuratoreAutonomo.getTasselnps() + "$")
console.log("Hai pagato per l'IRPEF: " + AlfredoMuratoreAutonomo.getTasselrpef() + "$")