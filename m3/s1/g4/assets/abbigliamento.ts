// CLASSE SINGOLO CAPO
class Capo{

    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number 
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

    constructor(id:number,codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number){
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

        this.mostraPrezzo()
    }

    mostraPrezzo():void{ 
        console.log('%cMOSTRA PRODOTTO', 'color: orange');
        console.log("NOME: " + this.capo)
        console.log("Prezzo con IVA: %c" + + this.prezzoivainclusa + "$", 'color: red')
    }

}

// FETCH GENERALE CAPI
fetch("assets/Abbigliamento.json")
.then((res:Response)=> {
    if(res.ok){
        return res.json()
    }else{
        throw new Error("ERRORE NEL CARICAMENTO DELLA FETCH")
    }
})
.then((res) => {
    console.warn("ARRAY DELLA FETCH")
    console.log(res)
    handlePage(res)
})
.catch((err)=>{
    console.error(err)
})



const handlePage = function(capi:[]){
    let nuovoArray:any = []
    capi.forEach((element:any) => {
        let nuovoCapo = new Capo
        (element.id,
        element.codprod,
        element.collezione,
        element.capo,
        element.modello,
        element.quantita,
        element.colore,
        element.prezzoivaesclusa,
        element.prezzoivainclusa,
        element.disponibile,
        element.saldo)

        nuovoArray.push(nuovoCapo)
        console.log(nuovoCapo)
    })

    console.warn("NUOVO ARRAY TIPIZZATO")
    console.log(nuovoArray)
}
