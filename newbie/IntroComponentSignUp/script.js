const form = document.querySelector('form')
const errorIcons = document.querySelectorAll('.icon__error')
const divContainer = document.querySelectorAll('div')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault()

    //se reinician los estados de error
    for(let i = 0; i < 4; i++){
        if(divContainer[i].childElementCount > 2)  divContainer[i].removeChild(document.querySelector('.text__error'))
    }

    //se checa cada input para saber su valor
    for(let i = 0; i < 4; i++){
        if(i != 2){
            //si los campos estan vacios se lanza un error
            form.elements[i].value == "" ? addError(i, form.elements[i].name + " cannot be empty") : removeError(i)
        } else{
            //si el emial esta vacio o no cumple con las considciones de email se lanza un error
            !emailPattern.test(form.elements[i].value) ? addError(i, "Looks like email this is not an email") : removeError(i)
        }
    }
})

function addError(element, text){
    form.elements[element].classList.add('trial__content__form__input--error')
    errorIcons[element].style.display = "block"

    const p = document.createElement('p')
    p.classList.add("text__error")
    p.textContent = String(text)
    divContainer[element].appendChild(p)
}

function removeError(element){
    form.elements[element].classList.remove('trial__content__form__input--error')
    errorIcons[element].style.display = "none"
}