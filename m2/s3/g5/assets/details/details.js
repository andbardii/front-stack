const endpoint = "https://striveschool-api.herokuapp.com/api/product/"

let addressBarContent = new URLSearchParams(window.location.search)
let productId = addressBarContent.get('productId')

const getProduct = function(){
    fetch(endpoint + productId, {
        headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTQ4NTg4Zjc0MDAwMTQyODc1OTkiLCJpYXQiOjE2ODM4ODcyMzcsImV4cCI6MTY4NTA5NjgzN30.hgJHWP6lWcscbBf5TfsPRQmgqwE4aNrVJx-hNBKqROQ"}
    })
    .then((res) => {
        if (res.ok){
            return res.json();
        }else{
            throw new Error("7) ERRORE NEL CARICARE IL DETAIL")
        }
    })
    .then((data) => {
        console.log(data)
        displayDetails(data)
    })
    .catch((err) => {
        console.log(err)
    })
}

const displayDetails = function(prodotto){
    let target = document.getElementById("detailTarget")
    target.innerHTML = `
        <div class="col-8">
        <img src="${prodotto.imageUrl}" class="card-img" alt="Foto Prodotto">
        </div>

        <div class="col-4 d-flex flex-column justify-content-center">
        <h5 class="card-title">${prodotto.name}</h5>
        <p class="card-text">${prodotto.description}</p>
        <a href="#" class="btn btn-danger mt-3">BUY</a>
        <a href="../office/office.html?productId=${prodotto._id}" class="btn btn-primary mt-5">MODIFICA</a>
        </div>
    `
}

window.onload = () => {
    getProduct()
}