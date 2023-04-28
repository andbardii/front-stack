let letters = document.querySelectorAll('.animation svg g')

function selectRandom(x) {
    return x[Math.floor(Math.random() * x.length)];
}

function lettereAnimate() {
    let switchTrue = selectRandom(Array.from(letters));
    if (switchTrue.classList.contains('letterM')) {
        switchTrue.classList.remove('letterM');
    } else {
        switchTrue.classList.add('letterM');
    }
};
setInterval(lettereAnimate, 2);
