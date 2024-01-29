const greeting = document.querySelector('h1.greeting')
let hora = new Date().getHours()

if (hora >= 5 && hora <= 12) {
    greeting.textContent = "Bom Dia"
} else if (hora >= 12 && hora <= 18) {
    greeting.textContent = "Boa Tarde"
} else {
    greeting.textContent = "Boa Noite"
}