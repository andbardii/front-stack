class capo{

    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number 
    quantita:number
    colore:string
    prezzoIvaEsclusa:number
    prezzoIvaInclusa:number
    disponibile:string
    saldo:number

    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoIvaEsclusa:number,prezzoIvaInclusa:number,disponibile:string,saldo:number){
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

    getPrezzoCapo():number {
        throw new Error("Not implemented. (getPrezzoCapo())")
    }
    
    getAcquistoCapo():number{
        throw new Error("Not implemented. (getAcquistoCapo())")
    }

}