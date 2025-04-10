const section = document.querySelector('.projects')

fetch('../projects.json')
.then(res => res.json())
    .then(data =>{
        newbies = data.filter(d => d.level =="newbie")
        createCards(newbies)
    })
    .catch(err => console.error(err))

const techs = {
    "html": "../assets/html.svg",
    "css": "../assets/css.svg",
    "js": "../assets/js.svg",
    "sass": "../assets/sass.svg",
    "tailwind": "../assets/tailwind.svg"
}


function createCards(datos){
    section.innerHTML = ""

    datos.forEach(({ title, image, url, technologies }) => {
        let images = ''

        technologies.forEach(tech => {
            images += `<img class="tech__logo" src=${techs[tech]} alt='${tech}'/>`
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