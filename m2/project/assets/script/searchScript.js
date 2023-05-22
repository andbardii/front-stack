const urlSite = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

const search = () => {
  let searchResult = document.getElementById("searchBar");
  let searchValue = searchResult.value;

  fetch(urlSite + searchValue)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nella fetch");
      }
    })

    .then((data) => {
      console.log(data);

      let contentToFill = document.getElementById("sfogliaTutto");
      contentToFill.innerHTML = "";
      let songResults = data.data;
      songResults.forEach((element) => {
        let cardTemplate = `
                <div class="col-12">
                <div class="row my-1">
                  <div class="col-12">
                    <div class="card bg-transparent text-light border-0 search-hover">
                      <div class="row g-0">
                        <div class="col-1">
                        <a class="text-decoration-none" href="album.html?albumId=${element.album.id}"><img src=${
                          element.album.cover
                        } class="img-fluid rounded-1 ms-3 mt-3 mb-3" alt="cover canzone"></a>
                        </div>
                        <div class="col-8">
                          <div class="card-body ms-3">
                            <h5 class="card-title"><a class="text-decoration-none text-light" href="album.html?albumId=${element.album.id}">${element.title}</a></h5>
                            <p class="card-text text-secondary"><a class="text-decoration-none text-light underline-me" href="artist.html?artistId=${element.artist.id}">${
                              element.artist.name
                            }</a></p>
                          </div>
                        </div>
                        <div class="col-3">
                          <div class="card-body d-flex flex-row-reverse">
                            <p class="d-inline me-5 ms-3">${Math.floor(
                              element.duration / 60
                            )}:${element.duration % 60}</p>
                            <p class="d-inline"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="none"
                            class="bi bi-heart me-5"
                            viewBox="0 0 16 16"
                            id="search-heart"
                          >
                            <path
                              d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                            />
                          </svg></p>
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                </div>
              </div>               
                `;

        contentToFill.innerHTML += cardTemplate;
        
        let searchHeart = document.querySelectorAll("#search-heart");
        searchHeart.forEach((heart) =>{
          heart.addEventListener("click", function () {
            if (heart.classList.contains("bi-heart")) {
              console.log("funziono")
              heart.classList.remove("bi-heart");
              heart.classList.add("bi-heart-fill");
              heart.setAttribute("fill", "green")
              heart.innerHTML = `<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>`;
            } else {
              console.log("cambio")
              heart.classList.add("bi-heart");
              heart.classList.remove("bi-heart-fill");
              heart.setAttribute("fill", "none")
              heart.innerHTML = `<path
                  d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                />`;
            }
          });
        })
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
};

let barraDiRicerca = document.getElementById("searchBar");
barraDiRicerca.addEventListener("search", function (e) {
  e.preventDefault();
  search();
});
