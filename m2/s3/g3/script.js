fetch("https://striveschool-api.herokuapp.com/books")
.then((res) => {
    if (res.ok){
        return res.json()
    }
    else{
        throw new Error('Errore nella request al server')
    }
})
.then((data) => {
    console.log(data)
    renderBooks(data)
})
.catch((err) => {
    console.log(err)
})

const renderBooks = function (books) {
    let booksList = document.getElementById("booksContainer") 
    books.forEach((book) => {
        let newCol = document.createElement("div")
        newCol.classList.add("col-6", "col-md-4", "col-xl-3");
        newCol.innerHTML = ` 
        <div class="card">
            <img src="${book.img}" class="card-img-top addHeight" alt="Book Cover">

            <div class="card-body mb-5">
                <h5 class="card-title">${book.title}</h5>
                    <p class="card-text h6">
                        ${book.category}
                    </p>
                    <p class="card-text">
                    PRICE: ${book.price}$
                    </p>
                <a href="#" class="btn btn-primary">BUY NOW</a>
                <a href="#" id="deleteButton" class="btn btn-danger">DELETE</a>
            </div>
        </div> `
        booksList.appendChild(newCol)

        // let deleteButton = document.getElementById('deleteButton')
        // deleteButton.addEventListener('click', deleteBook)
    })
}

// const deleteBook = function () {
// }


