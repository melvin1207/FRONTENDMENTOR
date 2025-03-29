const inputEmail = document.querySelector('.content__email-block__input')
const textError = document.querySelector('.content__email-block-text--error')
const iconError = document.querySelector('.content__email-block-text__icon')
const emailBtn = document.querySelector('.content__email-block__btn')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


emailBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const email = inputEmail.value
    
    if(email != '' && emailPattern.test(email)){
        inputEmail.classList.remove('content__email-block__input--error')
        textError.style.display = "none"
        iconError.style.display = "none"
        location.reload()
    } else{
        inputEmail.classList.add('content__email-block__input--error')
        textError.style.display = "block"
        iconError.style.display = "flex"
    }
})



