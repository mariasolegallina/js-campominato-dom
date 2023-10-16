console.log("campo minato")

const startBtnElement = document.getElementById('start-btn')
console.log(startBtnElement)

const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)


// cliccando il bottone compare una nuova griglia 
startBtnElement.addEventListener ('click', function (){
    
    // griglia vuota (punto di partenza e reset per il nuovo gioco)
    gridDOMElement.innerHTML = ''

    // generare 100 numeri e inviare gli elementi della griglia al DOM
    for (let i = 0; i < 100; i++) {
        const number = i + 1
        
        const gridCell = `<div class="grid__cell">${number}</div>`
    
        gridDOMElement.innerHTML += gridCell
    }

    // numero di cella minimo e numero massimo
    const minNum = 1
    const maxNum = 100

    // quantità di mine
    const minesNum = 16

    function getArrayOfNumIntInclusive (minNum, maxNum, minesNum) {
        // array vuoto, da popolare con i 16 numeri random
        const minesArray = []
        console.log(minesArray)
        
        while (minesArray.length < minesNum) {
            const n = getRandomIntInclusive (minNum, maxNum)
            console.log(minesArray.includes(n))
        } 
    }

})
   
// funzione per generare numeri random in un intervallo
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}