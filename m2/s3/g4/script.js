const apiKey = "pnt99hreaswyQpJQyr9Yg7iZY8CBUC2fLSQX5AzbYxF5tThSLdJ1uu9c"

    fetch("https://api.pexels.com/v1/search?query=planets", {headers: {Authorization: apiKey}})
    .then( (res) =>{
        if (res.ok){
            return res.json()
        }else{
            throw new Error("ERRORE NEL CONTATTARE IL SERVER")
        }
    })
    .then( (data) =>{
        console.log(data)
        firstLoad(data.photos)
    })
    .catch( (err) =>{
        console.log(err)
    })

    fetch("https://api.pexels.com/v1/search?query=lions", {headers: {Authorization: apiKey}})
    .then( (res) =>{
        if (res.ok){
            return res.json()
        }else{
            throw new Error("ERRORE NEL CONTATTARE IL SERVER")
        }
    })
    .then( (data) =>{
        secondLoad(data.photos)
    })
    .catch( (err) =>{
        console.log(err)
    })

const firstLoad = function (images){
        images = images.slice(0,9)
        let row = document.getElementById("target")
        row.innerHTML = ""
        let firstLoadButton = document.getElementById("loadImages")
        firstLoadButton.addEventListener("click", () => {
        images.forEach((image) => {
        let newCard = document.createElement("div")
        newCard.classList.add("col-md-4")
        newCard.innerHTML = `
        <div class="card mb-4 shadow-sm">
          <img src="${image.src.portrait}" alt="Image" class="bd-placeholder-img card-img-top" width=100%" height="70%">
          <div class="card-body">
            <h5 class="card-title">${image.alt}</h5>
            <p class="card-text">
                ${image.photographer_id}
                <a href="${image.photographer_url}"><b>${image.photographer}</b></a>
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>`
        row.appendChild(newCard)
        })
    })
}

const secondLoad = function (images){
    images = images.slice(0,9)
    let row = document.getElementById("target")
    row.innerHTML = ""
    let secondLoadButton = document.getElementById("loadSecondaryImages")
    secondLoadButton.addEventListener("click", () => {
    images.forEach((image) => {
    let newCard = document.createElement("div")
    newCard.classList.add("col-md-4")
    newCard.innerHTML = `
    <div class="card mb-4 shadow-sm">
      <img src="${image.src.portrait}" alt="Image" class="bd-placeholder-img card-img-top" width=100%" height="70%">
      <div class="card-body">
        <h5 class="card-title">${image.alt}</h5>
        <p class="card-text">
            ${image.photographer_id}
            <a href="${image.photographer_url}"><b>${image.photographer}</b></a>
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              View
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Edit
            </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>`
    row.appendChild(newCard)
    })
})
}