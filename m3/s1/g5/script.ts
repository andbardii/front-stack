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
            let now:Date = new Date()
            this.registroChiamate.push(new Chiamata(this.numeroChiamate, min, now))
        }else if(costoChiamata > this.carica){
            console.log("%cATTENZIONE CREDITO INSUFFICIENTE!","color: red")
        }
        
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0
        console.log("CHIAMATE AZZERATE CON SUCCESSO")
    }

}

//! GESTIONE CONSOLE 
console.warn("IPHONE")
let IPhone = new Smartphone(0, 0)
IPhone.ricarica(50)
// IPhone.chiamata(10)
// IPhone.chiamata(10)
// console.log(IPhone.getNumeroChiamate())
// IPhone.mostraRegistroChiamate()
// IPhone.filtraChiamatePerDataOra(26, 13)
// IPhone.filtraChiamatePerDataOra(26, 12)

console.warn("SAMSUNG")
let Samsung = new Smartphone(0, 0)
// Samsung.ricarica(60)
// Samsung.chiamata(500)
// Samsung.chiamata(50)
// Samsung.chiamata(50)

// console.log(Samsung.numero404())
// console.log(Samsung.getNumeroChiamate())
// Samsung.azzeraChiamate()
// console.log(Samsung.getNumeroChiamate())
// Samsung.mostraRegistroChiamate()

console.warn("XIAOMI")
let Xiaomi = new Smartphone(0, 0)
// Xiaomi.chiamata(10)

//! GESTIONE INDEX
let target:HTMLElement|null = document.querySelector("#screen")
let phoneApp:HTMLElement|null = document.querySelector("#gestione-smartphone")
phoneApp?.addEventListener("click", () =>{
    target!.innerHTML = ""
    let insidePhoneApp:HTMLElement = document.createElement("div")
    insidePhoneApp.classList.add("container-fluid", "h-100")
    insidePhoneApp.innerHTML = `<div class="row p-2 h-50">
                                <div class="col-12 fw-bold">${IPhone.numero404()}
                                <div class="col-12 btn btn-success" id="btn-ricarica">RICARICA</div>
                                <div class="col-12 btn btn-danger">CANCELLA CHIAMATE</div>
                                </div>
                                <div class="col-12 fw-bold text-secondary"><span>CHIAMATE EFFETTUATE: </span>${IPhone.getNumeroChiamate()}</div>
                                <div class="col-12">
                                <div class="row overflow-auto" id="chiamate">

                                </div>
                                </div>
                                <div class="col-12 text-center generic-app" id="bottone-chiama">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="green" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>
                                </div>
                                </div>
                                `
    target!.appendChild(insidePhoneApp)

let bottoneChiama:HTMLElement|null = insidePhoneApp.querySelector("#bottone-chiama")
let targetChiamate:HTMLElement|null = insidePhoneApp.querySelector("#chiamate")
bottoneChiama?.addEventListener("click", () => {

    IPhone.chiamata(Math.floor(Math.random() * 50))
    targetChiamate!.innerHTML = ""
    IPhone.registroChiamate.forEach((call:Chiamata)=>{
        let dChiamata:HTMLElement = document.createElement("div")
        dChiamata.classList.add("col-12", "border-bottom", "border-secondary")
        dChiamata.innerHTML =`<span class="me-2">${call.id}</span> <span class="me-2">${call.durata}</span class="me-2"> <span>${call.data}</span>`
        targetChiamate!.appendChild(dChiamata)
    })
})
})
