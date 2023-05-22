const ARTIST_URL = "https://striveschool-api.herokuapp.com/api/deezer/artist/";

let addressBarContent = new URLSearchParams(window.location.search);
let artistId = addressBarContent.get("artistId");
let songTarget = document.getElementById("songTarget");

const getArtistTrack = () => {
  fetch(ARTIST_URL + artistId)
    .then((res) => {
      console.log("RES", res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error fetching artist");
      }
    })
    .then((data) => {
      fillHeader(data);
      console.log("artist ", data);
      let popularTracks = data.tracklist;
      fetch(popularTracks)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Error fetching popular tracks");
          }
        })
        .then((popular) => {
          popularFill(popular);
          console.log(popular);
          playtracks(popular);
        })
        .catch((errore) => {
          console.log(errore);
        });
    })

    .catch((err) => {
      console.log(err);
    });
};

const fillHeader = (data) => {
  let artistHeader = document.getElementById("artistaHead");
  artistHeader.innerHTML = "";

  let artistImage = document.getElementById("artistImage");
  artistImage.style.background = `
        url(${data.picture_xl})
    `;
  let favouriteSongs = document.getElementById("favouriteSongs");
  favouriteSongs.innerHTML = "";

  let headFiller = `
    <p class="pt-5 mb-0 d-none d-lg-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3E91F4" class="bi bi-patch-check-fill" viewBox="0 0 16 16">
        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
        </svg>
        Artista Verificato
    </p>
  <h2 class="artistName p-2 mb-3">${data.name}</h1>
  <p class="py-2 d-none d-lg-block">${data.nb_fan} followers</p>
    `;
  artistHeader.innerHTML += headFiller;

  let favourite = `<span class="sottotitoli">Brani che ti piacciono</span>
        <div class="card bg-transparent text-light mt-2">
            <div class="row g-0">
              <div class="col-4 mt-3">
                <img src="${data.picture_small}" class="img-fluid rounded-circle" alt="Card title">
              </div>
              <div class="col-8">
                <div class="card-body">
                  <h6 class="card-title">Hai messo Mi piace a 11 brani</h5>
                  <p class="card-text">di ${data.name}</p>
                    <div id="artistLikes">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                          </svg>
                    </div>
                </div>
              </div>
            </div>
          </div>`;
  favouriteSongs.innerHTML = favourite;
};

const popularFill = (popular) => {
  let targetSong = document.getElementById("songTarget");
  targetSong.innerHTML = "";

  let popularCounter = 0;
  let popularArray = popular.data;
  popularArray.forEach((element) => {
    popularCounter += 1;
    targetSong.innerHTML += `
        <div class="col-8 mt-5">
            <span>${popularCounter}</span>
            <img width="70" class="px-2" src="${
              element.album.cover
            }" alt="foto">
            <a class="text-decoration-none text-light underline-me" href="album.html?albumId=${
              element.album.id
            }"><span>${element.title}</span></a>
        </div>
        <div class="col-3 p-0">
            <span>${element.rank}</span>
        </div>
        <div class="col-1 p-0">
            <span>${Math.floor(element.duration / 60)}:${
      element.duration % 60
    }</span>
        </div>    
        `;
  });
};

const playtracks = function (track) {
  let playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function () {
    let audioTrack = new Audio(track.data[0].preview);
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
    playerTitle.textContent = track.data[0].title_short;
    let playerGroup = document.getElementById("player-group");
    playerGroup.textContent = track.data[0].artist.name;
    let timeStart = document.getElementById("time-start");
    timeStart.textContent = "0:00";
    let timeEnd = document.getElementById("time-end");
    timeEnd.textContent = `${Math.floor(track.data[0].duration / 60)}:${
      track.data[0].duration % 60
    }`;
    let playerBar = document.getElementById("player-bar");
    playerBar.classList.remove("avanzamento");
  });
};

getArtistTrack();

// const appendTracks =  function (datatracks){
//     let tracklist = datatracks.tracks.data
//     songTarget.innerHTML = "";
//     for (let i=1; i<=5; i++) {
//             let content = `
//             <div class="col-8 mt-5">
//                 <span>${i}</span>
//                 <img src= ${tracklist.cover} alt="foto">
//                 <span>${tracklist.title}</span>
//             </div>
//             <div class="col-3">
//                 <span>${tracklist.rank}</span>
//             </div>
//             <div class="col-1">
//                 <span>${Math.floor((tracklist.duration)/60)} : ${(tracklist.duration) % 60}</span>
//             </div>

//     `
//     songTarget.innerHTML += content;
//     }

// }

// window.onload = () => {
//   getArtistTrack()
// }
