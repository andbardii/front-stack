//! SWITCH PAGES
//* DIV TARGET
let target = document.querySelector('.target');
// console.log(target);

//* TEMPLATES

let templates = document.querySelectorAll('template');
console.log(templates);

let firstTemplate = templates[0].content.cloneNode(true);
let secondTemplate = templates[1].content.cloneNode(true);
let thirdTemplate = templates[2].content.cloneNode(true);
let fourthTemplate = templates[3].content.cloneNode(true);

//! START PAGE
//* BUTTONS
let startButton = document.querySelector('.startButton');
// console.log(startButton);

startButton.addEventListener('click', function() {
    target.innerHTML = '';
    target.append(firstTemplate)

})

//! FIRST AND SECOND PAGE
let contatore = 0;
let domande;
let domandaCorrente;
let risposteSbagliate = [];

async function init() {

    let apiUrl = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy';
    domande = await fetch(apiUrl).then(res => res.json()); //ottengo le domande
    domande = shuffle(domande.results); //mescolo le domande

    // console.log(domande);

    let firstButton = firstTemplate.querySelector('.firstButton');
    console.log(firstButton);
    firstButton.addEventListener('click', function() {

        if (document.nomeForm.cb.checked) {
            target.innerHTML = '';
            target.append(secondTemplate);



        } else {
            alert("CheckBox non spuntato");

        };
        createButtons();
    });
}

function createButtons() {


    domandaCorrente = domande[contatore];
    let { type, difficulty, question, correct_answer, incorrect_answers } = domandaCorrente;


    //inizio a selezionare gli elementi con cui interagire
    let titolo = document.querySelector('.main .question');
    console.log(titolo);
    let areaBottoni = document.querySelector('.main .answers');
    console.log(areaBottoni);
    areaBottoni.innerHTML = '';
    let avanzamentoDomande = document.querySelector('.footer .avanzamentoDomande');
    avanzamentoDomande.innerHTML = contatore + 1;

    //inizio a compilare
    titolo.textContent = question;

    let risposteCompleto = incorrect_answers; //assegno il valore ad un nuovo array che modificherò, lasciando intatto incorrect_answers
    risposteCompleto.push(correct_answer);

    if (type != 'boolean') {
        risposteCompleto = shuffle(risposteCompleto); //mescolo le risposte
    }

    for (let rispostaSingola of risposteCompleto) {

        let button = document.createElement('button');
        button.textContent = rispostaSingola;
        button.classList.add('buttQuest');
        button.addEventListener('click', function() {
            if (contatore < 9) {

                contatore++;
                if (incorrect_answers.includes(rispostaSingola)) {
                    risposteSbagliate.push(domandaCorrente)
                }
                createButtons();
            } else {
                target.innerHTML = '';
                target.append(thirdTemplate); //funzione che distrugge lo stage 2 e attiva lo stage 3
            }
        })
        areaBottoni.append(button)
    }

    console.log(risposteSbagliate);


}

function shuffle(array) {
    let newArr = [];
    let length = array.length;
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * array.length);
        newArr.push(array[rand]);
        array.splice(rand, 1);
    }
    return newArr;
}

init();

//* TIMER
let semicirles = secondTemplate.querySelectorAll(".semicircle");
let timer = secondTemplate.querySelector(".timer");

//input
let hr = 0;
let min = 0;
let sec = 60;

let hours = hr * 3600000;
let minutes = min * 60000;
let seconds = sec * 1000;
let setTime = hours + minutes + seconds;
let starTime = Date.now();
let futureTime = starTime + setTime;


let = timerLoop = setInterval(countDownTimer);
countDownTimer();


function countDownTimer() {
    let currentTime = Date.now();
    let remainingTime = futureTime - currentTime;
    let angle = (remainingTime / setTime) * 360;

    //progress indicator
    if (angle > 180) {
        semicirles[2].style.display = 'none';
        semicirles[0].style.transform = 'rotate(180deg)';
        semicirles[1].style.transform = `rotate(${angle}deg)`;
    } else {
        semicirles[2].style.display = 'block';
        semicirles[0].style.transform = `rotate(${angle}deg)`;
        semicirles[1].style.transform = `rotate(${angle}deg)`;
    }

    //timer
    let secs = Math.floor((remainingTime / 1000) % 120)

    timer.innerHTML = `
    <div>${secs}</div>
    `;

    //5 sec condition

    //end
    if (remainingTime < 0) {
        clearInterval(timerLoop);
        semicirles[0].style.display = 'none';
        semicirles[1].style.display = 'none';
        semicirles[2].style.display = 'none';

        timer.innerHTML = `
        <div>00</div>
        `;
    }
}

//* CHART
// let canvas = thirdTemplate.querySelector('#myCanvas').getContext('2d');

// let lable = ['Correct', 'Wrong'];
// let data = [5, 7];
// let chart = new Chart(canvas, {
//     type: 'doughnut',
//     data: {
//         lables: lable,
//         datasets: [{
//             backgroundColor: [
//                 "#D20094",
//                 "#00ffff"
//             ],
//             borderWidth: 0,
//             cutout: 95,
//             lable: 'Risposte',
//             data: data
//         }],
//     }

// });

//! TO LAST PAGE
let rateButton = thirdTemplate.querySelector('.rate');
rateButton.addEventListener('click', function() {
    target.innerHTML = '';
    target.append(fourthTemplate)

})

//* STARS
let stars = fourthTemplate.querySelectorAll('.stars i');

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});