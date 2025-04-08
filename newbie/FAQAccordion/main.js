const details = document.querySelectorAll('details')
const mases = document.querySelectorAll('.mas')
const menos = document.querySelectorAll('.menos')

console.log(details)

details.forEach((detail, index) => {
    detail.addEventListener('toggle', (e) => {
        if(menos[index].getAttribute('visible') === "false"){
            mases[index].style.display = "none"
            menos[index].style.display = "inline"
            menos[index].setAttribute('visible', "true")
        } else{
            mases[index].style.display = "inline"
            menos[index].style.display = "none"
            menos[index].setAttribute('visible', "false")
        }
    })
})