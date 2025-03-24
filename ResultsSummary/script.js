const itemsContainer = document.querySelector('#items')

fetch('./data.json')
    .then(res => res.json())
    .then(data =>{
        createNewDiv(data)
    })
    .catch(err => console.error(err))

function createNewDiv(datos){
    itemsContainer.innerHTML = ""
    let i = 0
    datos.forEach(element => {
        i++
        const articulo = document.createElement("div")
        articulo.setAttribute("id", `item-${i}`)
        articulo.innerHTML += `
            <div class="color-items">
                <img  class="item-icon" src=${element.icon} alt="Imagen"/>
                <h1 class="item-title item-title-${i}">${element.category}</h1>
            </div>
            <p class="item-score"> <strong>${element.score} </strong> / 100</p>
        `
        itemsContainer.appendChild(articulo)
    });
}
