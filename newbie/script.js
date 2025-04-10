const section = document.querySelector('.projects')

fetch('./projects.json')
.then(res => res.json())
    .then(data =>{
        createCards(data)
    })
    .catch(err => console.error(err))


function createCards(datos){
    section.innerHTML = ""

    datos.forEach(({ title, image, url, technologies }) => {
        let images = ''

        technologies.forEach(tech => {
            if(tech == "html"){
                images += `
                    <img class="tech__logo" src=${'../assets/html.svg'} alt='${tech}'/>
                `
            } else if(tech == "css"){
                images += `
                    <img class="tech__logo" src=${'../assets/css.svg'} alt='${tech}' />
                `
            } else if(tech == "js"){
                images += `
                    <img class="tech__logo" src=${'../assets/js.svg'} alt='${tech}' />
                `
            } else if(tech == "sass"){
                images += `
                    <img class="tech__logo" src=${'../assets/sass.svg'} alt='${tech}' />
                `
            } else if(tech == "tailwind"){
                images += `
                    <img class="tech__logo" src=${'../assets/tailwind.svg'} alt='${tech}' />
                `
            }
        })


        const articulo = document.createElement('a')
        articulo.setAttribute('href', url)
        articulo.innerHTML = `
            <article href=${url} class="card">
                <img class="card__img" src=${image} alt=${title}/>
                <h2 class="card__title">${title}</h2>
                <div class="tech__logos">
                    ${images}
                </div>
            </article>
        `

        section.appendChild(articulo)
    })
}