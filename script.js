// script.js

// Crear un array para almacenar las tarjetas
let cards = [];

// Función para crear una nueva tarjeta
function createCard(index) {
  let card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>Card Title ${index}</h2>
    <p hidden>Card content ${index}</p>
    <a href="#" class="open-card">Open Card</a>
  `;
  return card;
}

// Crear 100 tarjetas y añadirlas al contenedor
for (let i = 0; i < 100; i++) {
  let card = createCard(i + 1);
  document.querySelector('.container').appendChild(card);
  cards.push(card);
}

// Mostrar contenido de la tarjeta en el modal
cards.forEach((card, index) => {
  card.querySelector('.open-card').addEventListener('click', (event) => {
    event.preventDefault(); // Evitar comportamiento predeterminado del enlace
    document.getElementById('modal-title').textContent = `Card ${index + 1}`;
    document.getElementById('modal-content').textContent = `Card content ${index + 1}`;
    document.getElementById('card-modal').style.display = 'block';
  });
});

// Función para cerrar el modal
function closeModal() {
  document.getElementById('card-modal').style.display = 'none';
}

// Añadir botón para guardar las tarjetas
let saveButton = document.createElement('button');
saveButton.textContent = 'Save Cards';
saveButton.addEventListener('click', saveCards);
document.querySelector('.container').appendChild(saveButton);

// Función para guardar las tarjetas
function saveCards() {
  let cardData = [];
  cards.forEach((card) => {
    let title = card.querySelector('h2').textContent;
    let content = card.querySelector('p').textContent;
    cardData.push({ title, content });
  });
  localStorage.setItem('cards', JSON.stringify(cardData));
}

// Función para cargar las tarjetas guardadas
function loadCards() {
  let cardData = JSON.parse(localStorage.getItem('cards'));
  cardData.forEach((card, index) => {
    let cardElement = cards[index];
    cardElement.querySelector('h2').textContent = card.title;
    cardElement.querySelector('p').textContent = card.content;
  });
}

// Cargar las tarjetas guardadas cuando se carga la página
loadCards();