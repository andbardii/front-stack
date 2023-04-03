document.getElementById("title").innerHTML = 'LOREM IPSUM DOLOR';

document.getElementById('cont1').innerText = '3 + 4'
document.getElementById('cont2').innerText = '='
document.getElementById('cont3').innerText = 3 + 4

alert('ATTENZIONE! le seguenti immagini non sono adatte ad un pubblico minore')

var anni = prompt('Quanti anni hai?');

        if( anni >= 18 && anni <= 200){

        }else if(anni < 18){
            location.href = 'https://www.laleggepertutti.it/428588_cosa-cambia-per-la-legge-a-18-anni'
        }

document.getElementById("button1").onclick = function(){
    document.getElementById("button1").innerHTML = "OTTIMO FUNZIONA TUTTO!" 
}

document.getElementById("button2").onsubmit = function(){
        document.write('Non si cliccano i pulsanti a caso')
        }