// Erstellt eine Variable mit Namen count und dem Wert 0
let count = 0;

// Erstellt eine Funktion mit dem Namen increaseCount
function increaseCount() {
  // Erstellt eine neue Variable mit Namen titleElement und speichert das h1-Element darin
  let titleElement = document.querySelector("h1");

  // Erhöht die Variable count um 1
  count = count + 1;

  // setzt den Textinhalt von titleElement auf den Wert von count.
  titleElement.textContent = count;
}
