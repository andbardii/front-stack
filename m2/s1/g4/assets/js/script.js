//TOPBAR SWITCH
let topBar = document.querySelector(".topBar")
let button = document.querySelector(".topBar .blackButton")

window.onscroll = function (){
    if(window.pageYOffset > 200){
        topBar.classList.add("newTopBar")
        button.classList.add("newButton")
    }else{
        topBar.classList.remove("newTopBar")
        button.classList.remove("newButton")
    }
}
// ANIMATION
let thatM = document.querySelectorAll('.animation svg g')

function selectRandom(x) {
    return x[Math.floor(Math.random() * x.length)];
}

function lettereAnimate() {
    let switchTrue = selectRandom(Array.from(thatM));
    if (switchTrue.classList.contains('letterM')) {
        switchTrue.classList.remove('letterM');
    } else {
        switchTrue.classList.add('letterM');
    }
};
setInterval(lettereAnimate, 2);
