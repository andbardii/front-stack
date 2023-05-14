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
    let basket = document.getElementById("dropTarget")
    let totalPriceTarget = document.getElementById("totalPriceTarget")
    let totalPrice = 0

    images.forEach(image => {
        let newCardProduct = document.createElement("div")
        newCardProduct.classList.add("card", "col-12","col-md-6","col-lg-4", "col-xxl-3", "text-center", "mb-3", "border-0")
        newCardProduct.innerHTML = `<img src="${image.imageUrl}" class="card-img-top" alt="Foto Prodotto" height="100%">
                                    <div class="card-body">
                                        <h5 class="card-title">${image.name}</h5>
                                        <div class="d-flex flex-column justify-content-between">
                                        <p class="card-text">${image.description}</p>
                                        <button id="buyButton"class="btn btn-outline-danger">BUY - ${image.price}$</button>
                                        <a href="assets/details/details.html?productId=${image._id}" class="btn btn-outline-warning my-2">DETAILS</a>
                                        <a href="assets/office/office.html?productId=${image._id}" class="btn btn-outline-primary">MODIFICA</a>
                                        </div>
                                     </div> `
        totalPriceTarget.innerHTML = `Total: ${totalPrice}$`
        
        let buyButton = newCardProduct.querySelector("#buyButton")
        buyButton.addEventListener("click", function () {
            totalPrice = totalPrice + image.price
            let basketItem = document.createElement("li")
            basketItem.innerHTML = `
            <a class="dropdown-item ps-0" href="#">
                <div class="d-flex">
                <img src="${image.imageUrl}" class="w-50 h-50" alt="Foto Prodotto">
                    <div class="d-flex flex-column align-items-end justify-content-start ps-2 flex-grow-1">
                        <p class="fw-bold mb-0">${image.name}</p>
                        <p class="mb-0">${image.price}$</p>
                    </div>
                </div>
            </a>
            `
            basket.appendChild(basketItem)
            totalPriceTarget.innerHTML = `Total: ${totalPrice}$`
        })
        rowReference.appendChild(newCardProduct)
    });
}


window.onload = () => {
    getProducts()
  }