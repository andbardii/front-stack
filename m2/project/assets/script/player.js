let playerHeart = document.getElementById("player-heart");

playerHeart.addEventListener("click", function () {
  if (playerHeart.classList.contains("bi-heart")) {
    playerHeart.classList.remove("bi-heart");
    playerHeart.classList.add("bi-heart-fill");
    playerHeart.innerHTML = `<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>`;
  } else {
    playerHeart.classList.add("bi-heart");
    playerHeart.classList.remove("bi-heart-fill");
    playerHeart.innerHTML = `<path
        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
      />`;
  }
});

let playerRandom = document.getElementById("player-random");

playerRandom.addEventListener("click", function () {
  if (playerRandom.getAttribute("fill") === "currentColor") {
    playerRandom.setAttribute("fill", "green");
  } else {
    playerRandom.setAttribute("fill", "currentColor");
  }
});

let playerRepeat = document.getElementById("player-repeat");

playerRepeat.addEventListener("click", function () {
  if (playerRepeat.getAttribute("fill") === "currentColor") {
    playerRepeat.setAttribute("fill", "green");
  } else {
    playerRepeat.setAttribute("fill", "currentColor");
  }
});

// let playerPlay = document.getElementById("player-play");

// playerPlay.addEventListener("click", () => {
//   if (playerPlay.classList.contains("bi-play-circle-fill")) {
//     playerPlay.classList.remove("bi-play-circle-fill");
//     playerPlay.classList.add("bi-pause-circle-fill");
//     playerPlay.innerHTML = `<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>`;
//   } else {
//     playerPlay.classList.add("bi-play-circle-fill");
//     playerPlay.classList.remove("bi-pause-circle-fill");
//     playerPlay.innerHTML = `<path
//     d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
//   />`;
//   }
// });

//buongiorno/buonasera

function times() {
  var currentHour = new Date().getHours();
  let word;

  if (currentHour < 18) {
    word = "Buongiorno";
  } else {
    word = "Buonasera";
  }
  return word;
}

let answer = document.getElementById("goodmorning");

answer.textContent = times();
