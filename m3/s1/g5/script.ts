interface ISmartphone {

    carica: number;
    numeroChiamate:number;
    costoMinuto:number;
    registroChiamate:Chiamata[];

    ricarica(euro:number):void
    numero404():string
    getNumeroChiamate():number
    chiamata(min:number):void
    azzeraChiamate():void
    mostraRegistroChiamate():void
    filtraChiamatePerDataOra(data:number, ora:number):void
}

class Chiamata {

    id:number;
    durata:number;
    data:Date;

    constructor(id:number, durata:number, data:Date){
        this.id = id;
        this.durata = durata;
        this.data = data;
    }
}

class Smartphone implements ISmartphone{

    carica: number;
    numeroChiamate: number;
    costoMinuto:number = 0.1;
    registroChiamate: Chiamata[] = [];

    constructor(carica:number, numeroChiamate:number){
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }
    mostraRegistroChiamate():void {
        console.log(this.registroChiamate)
    }
    filtraChiamatePerDataOra(data:number, ora:number): void {
        let chiamateFiltrate:Chiamata[] = []
        this.registroChiamate.forEach((call:Chiamata) => {
            if (data == call.data.getDate() && ora == call.data.getHours()){
                chiamateFiltrate.push(call);
            }
        })
        if(chiamateFiltrate.length == 0){
            console.log("%cNON CI SONO RISULTATI","color:red")
        }else{
            console.log("%cCI SONO " + chiamateFiltrate.length + " RISULTATI","color:green")
            console.log(chiamateFiltrate)
        }
    }
    ricarica(euro: number): void {
        this.carica += euro
        console.log("%cRICARICA DI " + euro + "€" + " EFFETTUATA CORRETTAMENTE","color: lightgreen")
    }
    numero404(): string {
        return "CREDITO RESIDUO: " + this.carica + "€"
    }
    getNumeroChiamate(): number {
       return this.numeroChiamate
    }
    chiamata(min: number): void {
        let costoChiamata = this.costoMinuto * min
        if(costoChiamata < this.carica){
            console.log("COSTO DELLA CHIAMATA: %c" + costoChiamata + "€","color: orange")

            this.carica -= costoChiamata
            this.numeroChiamate ++
            let now:Date = new Date()
            this.registroChiamate.push(new Chiamata(this.numeroChiamate, min, now))
        }else if(costoChiamata == this.carica){
            console.log("COSTO DELLA CHIAMATA: %c" + costoChiamata + "€","color: orange")
            console.log("%cATTENZIONE CREDITO AZZERATO!","color: red")

            this.carica -= costoChiamata
            this.numeroChiamate ++
        }else if(costoChiamata > this.carica){
            console.log("%cATTENZIONE CREDITO INSUFFICIENTE!","color: red")
        }
        
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
        console.log("CHIAMATE AZZERATE CON SUCCESSO")
    }

}

console.warn("IPHONE")
let IPhone = new Smartphone(0, 0)
IPhone.ricarica(50)
IPhone.chiamata(10)
IPhone.chiamata(10)
console.log(IPhone.getNumeroChiamate())
IPhone.mostraRegistroChiamate()
IPhone.filtraChiamatePerDataOra(26, 13)
IPhone.filtraChiamatePerDataOra(26, 12)

console.warn("SAMSUNG")
let Samsung = new Smartphone(0, 0)
Samsung.ricarica(60)
Samsung.chiamata(500)
Samsung.chiamata(50)
Samsung.chiamata(50)

console.log(Samsung.numero404())
console.log(Samsung.getNumeroChiamate())
Samsung.azzeraChiamate()
console.log(Samsung.getNumeroChiamate())
Samsung.mostraRegistroChiamate()

console.warn("XIAOMI")
let Xiaomi = new Smartphone(0, 0)
Xiaomi.chiamata(10)
