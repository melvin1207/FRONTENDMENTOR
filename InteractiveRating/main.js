const ratings = document.querySelectorAll('.rating')
const button = document.querySelector('#submit')
const rate = document.querySelector('.rate')
const thanks = document.querySelector('.thanks')
let selected = ''

console.log(ratings)

ratings.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault()
        deleteSelectedClass()
        selected = btn.textContent
        btn.classList.add('selected')
    })
})

console.log(selected)

button.addEventListener('click', (e) => {
    e.preventDefault()
    if(selected == ''){
        btnErrors()
        setTimeout(() =>{
            btnCleanErrors()
        }, 2000)
    } else{
        rate.style.display = "none"
        thanks.style.display = "flex"
        setTimeout(() => {
            location.reload()
        }, 3000)
        
    }
})

function btnErrors(){
    ratings.forEach(btn =>{
        btn.classList.add('error')
    })
}

function btnCleanErrors(){
    ratings.forEach(btn =>{
        btn.classList.remove('error')
    })
}

function deleteSelectedClass(){
    ratings.forEach(btn =>{
        btn.classList.remove('selected')
    })
}

