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

    

})