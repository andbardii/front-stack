var firstNumber = 50;
var secondNumber = 12;
var compareNumbers = function (a, b) {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Il numero casuale era: " + randomNumber);
    if (a == randomNumber) {
        console.log("Il Player 1 ha indovinato il numero!");
    }
    else if (b == randomNumber) {
        console.log("Il Player 2 ha indovinato il numero!");
    }
    else {
        if (Math.abs(a - randomNumber) < Math.abs(b - randomNumber)) {
            console.log("Nessuno ha indovinato il numero, ma il Player 1 si è avvicinato di più!");
        }
        else if (Math.abs(b - randomNumber) < Math.abs(a - randomNumber)) {
            console.log("Nessuno ha indovinato il numero, ma il Player 2 si è avvicinato di più!");
        }
    }
};
compareNumbers(firstNumber, secondNumber);
