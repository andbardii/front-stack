const endpoint = "https://striveschool-api.herokuapp.com/api/product/"

const getProducts = function(){
    fetch(endpoint,{
        headers:{"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTQ4NTg4Zjc0MDAwMTQyODc1OTkiLCJpYXQiOjE2ODM4ODcyMzcsImV4cCI6MTY4NTA5NjgzN30.hgJHWP6lWcscbBf5TfsPRQmgqwE4aNrVJx-hNBKqROQ"}
    })
    .then((res)=> {
        if(res.ok){
            return res.json()
        }else{
            throw new Error("3) ERRORE NEL CARICAMENTO IMMAGINI")
        }
    })
    .then((data)=> {
        console.log(data)
        renderImages(data)
    })
    .catch((err)=> {
        console.log(err)
    })
}

const renderImages = function (images){
    let rowReference = document.getElementById("trending")

    images.forEach(image => {
        let newCardProduct = document.createElement("div")
        newCardProduct.classList.add("card", "text-center", "mb-3", "w-25")
        newCardProduct.innerHTML = `<img src="${image.imageUrl}" class="card-img-top" alt="Foto Prodotto" height="100%">
                                    <div class="card-body">
                                        <h5 class="card-title">${image.name}</h5>
                                        <div class="d-flex flex-column justify-content-between">
                                        <p class="card-text">${image.description}</p>
                                        <a href="#" class="btn btn-outline-danger">BUY</a>
                                        <a href="#" class="btn btn-outline-warning my-2">DETAILS</a>
                                        <a href="assets/office/office.html?productId=${image._id}" class="btn btn-outline-primary">MODIFICA</a>
                                        </div>
                                     </div> `
        rowReference.appendChild(newCardProduct)
    });
}

window.onload = () => {
    getProducts()
  }