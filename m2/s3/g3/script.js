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
    let basketContainer = document.getElementById("basketContainer") 

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
                <a href="#" class="btn btn-dark">BUY NOW</a>
                <a href="#" id="deleteButton" class="btn btn-danger">DELETE</a>
                <a href="#" id="addToBasket" class="btn btn-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" class="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </a>
                <a href="#" id="removeFromBasket" class="btn btn-dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" class="bi bi-cart-dash" viewBox="0 0 16 16">
                        <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z"/>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg>
                </a>


            </div>
        </div> `

        let deleteButton = newCol.querySelector('#deleteButton');
            deleteButton.addEventListener('click', () => {
                newCol.remove();
            });

        let addButton = newCol.querySelector('#addToBasket');
            addButton.addEventListener('click', () => {
                basketContainer.appendChild(newCol);
            });
        
        let removeFromBasket = newCol.querySelector('#removeFromBasket');
            removeFromBasket.addEventListener('click', () => {
                booksList.appendChild(newCol);
            });
        booksList.appendChild(newCol)
    })
}

let clearBasket = document.getElementById('clearBasket');
clearBasket.addEventListener('click', () => {
    let basketContainer = document.querySelector('#basketContainer');
    basketContainer.innerHTML = '';
})

