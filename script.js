// script.js

// Create arrays to store the card titles and content
let cardTitles = [
  "Primera vista", "Primer conversación", "Primer contacto", "Card Title 4", "Card Title 5",
  "Card Title 6", "Card Title 7", "Card Title 8", "Card Title 9", "Card Title 10",
  "Card Title 11", "Card Title 12", "Card Title 13", "Card Title 14", "Card Title 15",
  "Card Title 16", "Card Title 17", "Card Title 18", "Card Title 19", "Card Title 20",
  "Card Title 21", "Card Title 22", "Card Title 23", "Card Title 24", "Card Title 25",
  "Card Title 26", "Card Title 27", "Card Title 28", "Card Title 29", "Card Title 30",
  "Card Title 31", "Card Title 32", "Card Title 33", "Card Title 34", "Card Title 35",
  "Card Title 36", "Card Title 37", "Card Title 38", "Card Title 39", "Card Title 40",
  "Card Title 41", "Card Title 42", "Card Title 43", "Card Title 44", "Card Title 45",
  "Card Title 46", "Card Title 47", "Card Title 48", "Card Title 49", "Card Title 50",
  "Card Title 51", "Card Title 52", "Card Title 53", "Card Title 54", "Card Title 55",
  "Card Title 56", "Card Title 57", "Card Title 58", "Card Title 59", "Card Title 60",
  "Card Title 61", "Card Title 62", "Card Title 63", "Card Title 64", "Card Title 65",
  "Card Title 66", "Card Title 67", "Card Title 68", "Card Title 69", "Card Title 70",
  "Card Title 71", "Card Title 72", "Card Title 73", "Card Title 74", "Card Title 75",
  "Card Title 76", "Card Title 77", "Card Title 78", "Card Title 79", "Card Title 80",
  "Card Title 81", "Card Title 82", "Card Title 83", "Card Title 84", "Card Title 85",
  "Card Title 86", "Card Title 87", "Card Title 88", "Card Title 89", "Card Title 90",
  "Card Title 91", "Card Title 92", "Card Title 93", "Card Title 94", "Card Title 95",
  "Card Title 96", "Card Title 97", "Card Title 98", "Card Title 99", "Card Title 100"
];

let cardContents = new Array(100).fill("This is the content of the card. You can change this text.");

// Function to create a new card with a title
function createCard(index) {
  let card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<h2>${cardTitles[index]}</h2>`;
  card.addEventListener('click', () => openCard(index));
  return card;
}

// Function to show all cards
function showAllCards() {
  let app = document.getElementById('app');
  app.innerHTML = '<div class="container"></div><button id="saveButton">Save Cards</button>';
  let container = app.querySelector('.container');
  
  for (let i = 0; i < cardTitles.length; i++) {
      let card = createCard(i);
      container.appendChild(card);
  }

  document.getElementById('saveButton').