// script.js

// Crear un array para almacenar las tarjetas
let cards = [];

// Función para crear una nueva tarjeta
function createCard(index) {
  let card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h2>Card ${index}</h2>`;
  card.addEventListener('click', () => openCard(index - 1));
  return card;
}

// Función para mostrar todas las tarjetas
function showAllCards() {
  let app = document.getElementById('app');
  app.innerHTML = '<div class="container"></div><button id="saveButton">Save Cards</button>';
  let container = app.querySelector('.container');
  
  for (let i = 0; i < 100; i++) {
    let card = createCard(i + 1);
    container.appendChild(card);
    cards.push(card);
  }

  document.getElementById('saveButton').addEventListener('click', saveCards);
}

// Función para abrir una tarjeta individual
function openCard(index) {
  let app = document.getElementById('app');
  app.innerHTML = `
    <div class="opened-card">
      <h1>Card ${index + 1}</h1>
      <textarea id="card-content" rows="10"></textarea>
      <button onclick="saveCardContent(${index})">Save</button>
      <button onclick="showAllCards()">Back</button>
    </div>
  `;

  let cardData = JSON.parse(localStorage.getItem('cards')) || [];
  if (cardData[index]) {
    document.getElementById('card-content').value = cardData[index].content;
  }
}

// Función para guardar el contenido de una tarjeta individual
function saveCardContent(index) {
  let content = document.getElementById('card-content').value;
  let cardData = JSON.parse(localStorage.getItem('cards')) || [];
  cardData[index] = { content: content };
  localStorage.setItem('cards', JSON.stringify(cardData));
  showAllCards();
}

// Función para guardar todas las tarjetas
function saveCards() {
  let cardData = cards.map(card => ({
    content: card.querySelector('h2').textContent
  }));
  localStorage.setItem('cards', JSON.stringify(cardData));
  alert('Cards saved successfully!');
}

// Función para cargar las tarjetas guardadas
function loadCards() {
  let cardData = JSON.parse(localStorage.getItem('cards'));
  if (cardData) {
    cardData.forEach((data, index) => {
      if (index < cards.length) {
        cards[index].querySelector('h2').textContent = `Card ${index + 1}: ${data.content.substring(0, 20)}...`;
      }
    });
  }
}

// Inicializar la aplicación
function init() {
  showAllCards();
  loadCards();
}

// Llamar a init cuando se carga la página
window.onload = init;