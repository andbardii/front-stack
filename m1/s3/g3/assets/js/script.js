    /* ESERCIZIO 1
    Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */
    const changeTitle = function () {
      let newTitle = document.querySelector("h1").innerHTML = "That's new title"
    }
    changeTitle()
    /* ESERCIZIO 2
       Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
    */

    const addClassToTitle = function () {
      let newClass = document.querySelector("h1").classList.add("myHeading")
   }
   addClassToTitle()
    /* ESERCIZIO 3
       Scrivi una funzione per che cambi il testo dei p figli di un div
      */

    const changePcontent = function () {
      let newPcontent = document.querySelector("div p").innerHTML = "That's new paragraph"
    }
   changePcontent()
    /* ESERCIZIO 4
       Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
      */

    const changeUrls = function () {
      let newHref = document.querySelector("a").setAttribute("href", "https://www.google.com")
    }
      changeUrls()

    /* ESERCIZIO 5
       Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
    */

    const addToTheSecond = function () {
      let newLi = document.createElement("li")
      newLi.textContent = "4th";
      secondList = document.querySelector("#secondList").append(newLi)}
    addToTheSecond()
    /* ESERCIZIO 6
       Scrivi una funzione che aggiunga un secondo paragrafo al primo div
    */

    const addParagraph = function () {
      let newPar = document.createElement("p")
      newPar.textContent = "That's another new paragraph"
      let firstDiv = document.querySelector("div").append(newPar)}
    addParagraph()

    /* ESERCIZIO 7
       Scrivi una funzione che faccia scomparire la prima lista non ordinata
    */

    const hideFirstUl = function () {
      let hiddenUl = document.querySelector("#firstList").style.display = "none"
    }
   hideFirstUl()
    /* ESERCIZIO 8 
       Scrivi una funzione che renda verde il background di ogni lista non ordinata
      */

    const paintItGreen = function () {
      let greenUl = document.querySelector("#secondList").style.backgroundColor = "green"
    }
   paintItGreen()
    /* ESERCIZIO 9
       Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
      */

    const makeItClickable = function () {
      let tasto = document.querySelector("h1");
      tasto.addEventListener("click", function () {
      tasto.textContent = tasto.textContent.slice(0, -1)
    })
   }
   makeItClickable()
    /* ESERCIZIO 10
       Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
      */

    const revealFooterLink = function () {
      let tastoFooter = document.querySelector("footer");
      tastoFooter.addEventListener("click", function () {
         alert(document.querySelector("footer a").getAttribute("href"))
    })
   }
   revealFooterLink()
    /* ESERCIZIO 11
       Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
       La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
    */

    const generateTable = function () {
      let tableArea = document.querySelector("#tableArea")
      let table = document.createElement("table")
      let tr = table.append(document.createElement("tr"))
      let th = tr.append(document.createElement("th"))
    }
generateTable()
    /* ESERCIZIO 12
       Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
    */

    const addRow = function () {


    }

    /* ESERCIZIO 14
      Crea una funzione che nasconda le immagini della tabella quando eseguita
    */

    const hideAllImages = function () {


    }

    /* EXTRA ESERCIZIO 15
      Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
    */

    const changeColorWithRandom = function () {


    }

    /* EXTRA ESERCIZIO 16
      Crea una funzione che elimini le vocali da ogni elemento testuale della pagina (puoi aiutarti con i nuovi metodi degli array di ES6)
    */

    const deleteVowels = function () {


    }
