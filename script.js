const button = document.querySelector('.dice')
function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        document.querySelector('h1').innerText = 'ADVICE #' + data.slip.id
        document.querySelector('p').innerText = `"${data.slip.advice}"`
    })
}
button.addEventListener('click', event => {
    getAdvice()
})