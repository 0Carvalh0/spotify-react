const greetingBox = document.getElementById("greeting");
let hora = new Date().getHours();

if (hora >= 5 && hora <= 12) {
  greetingBox.textContent = "Bom Dia";
} else if (hora >= 12 && hora <= 18) {
  greetingBox.textContent = "Boa Tarde";
} else {
  greetingBox.textContent = "Boa Noite";
}
