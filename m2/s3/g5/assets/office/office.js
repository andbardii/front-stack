const endpoint = "https://striveschool-api.herokuapp.com/api/product/"


//! MODELLO PRODOTTO
// {
//     "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
//     "name": "app test 1",  //REQUIRED
//     "description": "somthing longer", //REQUIRED
//     "brand": "nokia", //REQUIRED
//     "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
//     "price": 100, //REQUIRED
//     "userId": "admin", //SERVER GENERATED
//     "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "__v": 0 //SERVER GENERATED
// }

fetch(endpoint, {headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTQ4NTg4Zjc0MDAwMTQyODc1OTkiLCJpYXQiOjE2ODM4ODcyMzcsImV4cCI6MTY4NTA5NjgzN30.hgJHWP6lWcscbBf5TfsPRQmgqwE4aNrVJx-hNBKqROQ"}})
.then((res) =>{
    if (res.ok){
        return res.json()
    }else{
        throw new Error("1) ERRORE NEL CONTATTARE IL SERVER")
    }
})
.then((data) =>{
    console.log(data)
})
.catch((err) =>{
    console.log(err)
})

const eventForm = document.getElementById('event-form')
eventForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let productName = document.getElementById("name")
    let productDescription = document.getElementById("description")
    let productBrand = document.getElementById("brand")
    let productImage = document.getElementById("image")
    let productPrice = document.getElementById("price")

    let newProduct = {
        name: productName.value,
        description: productDescription.value,
        brand: productBrand.value,
        imageUrl: productImage.value,
        price: productPrice.value,
    }
    console.log("QUESTO DOVREBBE ESSERE IL NUOVO PRODOTTO DA POSTARE", newProduct)

    fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTQ4NTg4Zjc0MDAwMTQyODc1OTkiLCJpYXQiOjE2ODM4ODcyMzcsImV4cCI6MTY4NTA5NjgzN30.hgJHWP6lWcscbBf5TfsPRQmgqwE4aNrVJx-hNBKqROQ",
            "Content-Type": "application/json",
        },
    })
    .then((res)=> {
        if(res.ok){
            alert("SALVATAGGIO COMPLETATO CON SUCCESSO")
            console.log(res)
            location.assign('../../index.html')
        }else{
            alert("ERRORE NEL SALVATAGGIO")
            throw new Error("2) ERRORE NEL SALVATAGGIO")
        }
    })
    .catch((err)=> {
        console.log(err)
    })
})
      
      