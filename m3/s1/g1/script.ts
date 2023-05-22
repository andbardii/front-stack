let firstNumber:number = 50
let secondNumber:number = 12


const compareNumbers = (a:number, b:number):void =>{
        let randomNumber:number = Math.floor(Math.random() * 100) + 1;
        console.log("Il numero casuale era: "+randomNumber)
        if(a == randomNumber){
            console.log("Il Player 1 ha indovinato il numero!")
            if(a == b && b == randomNumber){
                console.log("Entrambi i Player hanno indovinato!")
            }
        }else if(b == randomNumber){
            console.log("Il Player 2 ha indovinato il numero!")
        }else{
            if(Math.abs(a - randomNumber) < Math.abs(b - randomNumber)){
                console.log("Nessuno ha indovinato il numero, ma il Player 1 si è avvicinato di più!")
            }else if(Math.abs(b - randomNumber) < Math.abs(a - randomNumber)){
                console.log("Nessuno ha indovinato il numero, ma il Player 2 si è avvicinato di più!")
            }else if (Math.abs(b - randomNumber) == Math.abs(a - randomNumber)){
                console.log("Nessuno ha indovinato il numero, ed entrambi hanno inserito lo stesso numero!")
            }
        }
        }

window.onload = () => {
    compareNumbers(firstNumber, secondNumber)
}