let counter = 0;

function createNewElement() {
  let newElement = document.createElementNS("p");

  counter = counter + 1;

  newElement.textContent = "Elemnt " + counter;

  let mainElement = document.querySelector("main");
  mainElement.appendChild(newElement);
}

//bhff
