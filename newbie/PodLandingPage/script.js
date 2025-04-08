const input = document.querySelector('.form__input')
const btn = document.querySelector('.form__btn')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(input)
    if(!emailPattern.test(input.value)){
        input.classList.add('error')
        input.value = "Ingresa un email valido"
    } else{
        input.classList.remove('error')
        location.reload()
    }
    
})
