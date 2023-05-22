let heartDecoration = document.getElementById("heart-tool");

heartDecoration.addEventListener("click", function () {
  if (heartDecoration.classList.contains("bi-heart")) {
    heartDecoration.classList.remove("bi-heart");
    heartDecoration.classList.add("bi-heart-fill");
    heartDecoration.innerHTML = `<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>`;
  } else {
    heartDecoration.classList.add("bi-heart");
    heartDecoration.classList.remove("bi-heart-fill");
    heartDecoration.innerHTML = `<path
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
        />`;
  }
});

const ALBUM_URL = "https://striveschool-api.herokuapp.com/api/deezer/album/";
let addressBarContent = new URLSearchParams(window.location.search);
let albumId = addressBarContent.get("albumId");
let appendAlbum = document.getElementById("append-album");
let albumCover = document.querySelector(".album-cover");

const getAlbum = () => {
  fetch(ALBUM_URL + albumId)
    .then((res) => {
      console.log("RES", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error album");
      }
    })
    .then((data) => {
      console.log(data);
      appendTracks(data);
      appendCover(data);
      playtracks(data);
    })

    .catch((err) => {
      console.log(err);
    });
};

const appendCover = function (datacover) {
  albumCover.innerHTML = `<div class="album-cover text-light d-flex mt-3 bt-0"> 
    <div class="row"> 
      <div class="col-md-3 mt-5 mb-3 ">
        <img id="img" src="${
          datacover.cover_xl
        }" crossorigin="anonymous" onload="start()" class="img-fluid rounded-start ms-5 mb-2" height="230" width="230" alt="...">
      </div>
      <div id="current-album" class="col-md-9 mt-5">
        <div class="card-body ms-0 ps-0 ">
        <p class="card-text fw-bold" >ALBUM</p>
        <h5 class="card-title display-3 fw-bold ">${datacover.title}</h5>
        <div class="d-flex">
          <img src="${
            datacover.artist.picture_small
          }" class= "rounded-circle" height="40">
          <p class="card-text ms-2 mt-2"><span class="fw-bold">${
            datacover.artist.name
          }</span>•${datacover.release_date.slice(0, 4)}•${
    datacover.tracks.data.length
  } brani•${Math.floor(datacover.duration / 60)} min ${
    datacover.duration % 60
  } sec</p>
          <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};

const appendTracks = function (datatracks) {
  let tracklist = datatracks.tracks.data;
  let trackSelector = 0;
  tracklist.forEach((track) => {
    trackSelector += 1;
    appendAlbum.innerHTML += `<div class="col-7 d-flex align-items-center"><span class="px-3 text-light">${trackSelector}</span>
    <div>
      <p class="text-light fw-bold mb-0">${track.title}</p>
      <p class="mb-0"><a class="text-decoration-none text-secondary underline-me" href="artist.html?artistId=${
        track.artist.id
      }">${track.artist.name}</a></p>
    </div>
  </div>
  <div class=" col-4 d-flex align-items-center">${track.rank}</div>
  <div class="col-1 d-flex align-items-center flex-row-reverse pe-1">${Math.floor(
    track.duration / 60
  )}:${track.duration % 60}</div>`;
  });
};

const playtracks = function (track) {
  let playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    let audioTrack = new Audio(track.tracks.data[0].preview);
    audioTrack.play();
    let playerPlay = document.getElementById("player-play");
    playerPlay.classList.remove("bi-play-circle-fill");
    playerPlay.classList.add("bi-pause-circle-fill");
    playerPlay.innerHTML = `<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>`;
    playerPlay.addEventListener("click", function () {
      if (playerPlay.classList.contains("bi-pause-circle-fill")) {
        playerPlay.classList.add("bi-play-circle-fill");
        playerPlay.classList.remove("bi-pause-circle-fill");
        playerPlay.innerHTML = `<path
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
        />`;
        audioTrack.pause();
      } else {
        playerPlay.classList.remove("bi-play-circle-fill");
        playerPlay.classList.add("bi-pause-circle-fill");
        playerPlay.innerHTML = `<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"/>`;
        audioTrack.play();
      }
    });
    let playerImg = document.getElementById("player-img");
    playerImg.src = track.cover_small;
    let playerTitle = document.getElementById("player-title");
    playerTitle.textContent = track.tracks.data[0].title_short;
    let playerGroup = document.getElementById("player-group");
    playerGroup.textContent = track.artist.name;
    let timeStart = document.getElementById("time-start");
    timeStart.textContent = "0:00";
    let timeEnd = document.getElementById("time-end");
    timeEnd.textContent = `${Math.floor(track.tracks.data[0].duration / 60)}:${
      track.tracks.data[0].duration % 60
    }`;
    let playerBar = document.getElementById("player-bar");
    playerBar.classList.remove("avanzamento");
  });
};

window.onload = () => {
  getAlbum();
};

// crea un canvas con l'immagine e ne ritorno il context 2d
const draw = function (img) {
  let canvas = document.createElement("canvas");
  let c = canvas.getContext("2d");
  c.width = canvas.width = img.clientWidth;
  c.height = canvas.height = img.clientHeight;
  c.clearRect(0, 0, c.width, c.height);
  c.drawImage(img, 0, 0, img.clientWidth, img.clientHeight);
  return c;
};

// scompone pixel per pixel e ritorna un oggetto con una mappa della loro frequenza nell'immagine
const getColors = function (c) {
  let col,
    colors = {};
  let pixels, r, g, b, a;
  r = g = b = a = 0;
  pixels = c.getImageData(0, 0, c.width, c.height);
  for (let i = 0, data = pixels.data; i < data.length; i += 4) {
    r = data[i];
    g = data[i + 1];
    b = data[i + 2];
    a = data[i + 3];
    if (a < 255 / 2) continue;
    col = rgbToHex(r, g, b);
    if (!colors[col]) colors[col] = 0;
    colors[col]++;
  }
  return colors;
};

// trova il colore più ricorrente data una mappa di frequenza dei colori
const findMostRecurrentColor = function (colorMap) {
  let highestValue = 0;
  let mostRecurrent = null;
  for (const hexColor in colorMap) {
    if (colorMap[hexColor] > highestValue) {
      mostRecurrent = hexColor;
      highestValue = colorMap[hexColor];
    }
  }
  return mostRecurrent;
};

// converte un valore in rgb a un valore esadecimale
const rgbToHex = function (r, g, b) {
  if (r > 255 || g > 255 || b > 255) {
    throw "Invalid color component";
  } else {
    return ((r << 16) | (g << 8) | b).toString(16);
  }
};

// inserisce degli '0' se necessario davanti al colore in esadecimale per renderlo di 6 caratteri
const pad = function (hex) {
  return ("000000" + hex).slice(-6);
};

const start = function () {
  // prendo il riferimento all'immagine del dom
  let imgReference = document.querySelector("#img");

  // creo il context 2d dell'immagine selezionata
  let context = draw(imgReference);

  // creo la mappa dei colori più ricorrenti nell'immagine
  let allColors = getColors(context);

  // trovo colore più ricorrente in esadecimale
  let mostRecurrent = findMostRecurrentColor(allColors);

  // se necessario, aggiunge degli '0' per rendere il risultato un valido colore esadecimale
  let mostRecurrentHex = "#" + pad(mostRecurrent);

  // console.log del risultato
  console.log(mostRecurrentHex);
  albumCover.style.backgroundColor = mostRecurrentHex;
};

// "album":{
//"id":331818647,
// "title":"Mercury - Acts 1 & 2","cover":"https://api.deezer.com/album/331818647/image","cover_small":"https://e-cdns-images.dzcdn.net/images/cover/7f7aae26b50cb046c872238b6a2a10c2/56x56-000000-80-0-0.jpg",
// "cover_medium":"https://e-cdns-images.dzcdn.net/images/cover/7f7aae26b50cb046c872238b6a2a10c2/250x250-000000-80-0-0.jpg"
// ,"cover_big":"https://e-cdns-images.dzcdn.net/images/cover/7f7aae26b50cb046c872238b6a2a10c2/500x500-000000-80-0-0.jpg",
// "cover_xl":"https://e-cdns-images.dzcdn.net/images/cover/7f7aae26b50cb046c872238b6a2a10c2/1000x1000-000000-80-0-0.jpg","md5_image":"7f7aae26b50cb046c872238b6a2a10c2","tracklist":"https://api.deezer.com/album/331818647/tracks"
// ,"type":"album"},
// "type":"track"}
