const inputEmail = document.querySelector('.header__form__input')
const btn = document.querySelector('.header__form__btn')
const textError = document.querySelector('.header__form__error-text')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = inputEmail.value
    
    if(email != "" && emailPattern.test(email)){
        inputEmail.classList.remove('header__form__input--error')
        textError.style.display = "none"
        location.reload()
    } else{
        inputEmail.classList.add('header__form__input--error')
        textError.style.display = "block"
    }
})