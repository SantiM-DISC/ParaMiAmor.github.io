// script.js

// Create an array to store the cards
let cards = [];

// Function to create a new card
function createCard(index) {
	let card = document.createElement('div');
	card.className = 'card';
	card.innerHTML = `
		<h2>Card Title ${index}</h2>
		<a href="card${index}.html">Open Card</a>
	`;
	return card;
}

// Create 100 cards and add them to the container
for (let i = 0; i < 100; i++) {
	let card = createCard(i + 1);
	document.querySelector('.container').appendChild(card);
	cards.push(card);
}

// script.js (continued)
for (let i = 0; i < 100; i++) {
	let cardContent = `
		<!DOCTYPE html>
		<html>
		<head>
			<title>Card ${i + 1}</title>
			<link rel="stylesheet" href="style.css">
		</head>
		<body>
			<h1>Card ${i + 1}</h1>
			<p>Card content ${i + 1}</p>
		</body>
		</html>
	`;

	let cardFile = `card${i + 1}.html`;
	fs.writeFileSync(cardFile, cardContent);
}
// Function to make a card editable
function makeCardEditable(card) {
	let title = card.querySelector('h2');
	let content = card.querySelector('p');
	title.contentEditable = 'true';
	content.contentEditable = 'true';
}

// Add event listeners to each card to make it editable
cards.forEach((card) => {
	card.addEventListener('click', () => {
		card.querySelector('.card-content').toggleAttribute('hidden');
	});
});

// script.js (continued)

// Function to save the cards
function saveCards() {
	let cardData = [];
	cards.forEach((card) => {
		let title = card.querySelector('h2').textContent;
		let content = card.querySelector('p').textContent;
		cardData.push({ title, content });
	});
	localStorage.setItem('cards', JSON.stringify(cardData));
}

// Add a button to save the cards
let saveButton = document.createElement('button');
saveButton.textContent = 'Save Cards';
saveButton.addEventListener('click', saveCards);
document.querySelector('.container').appendChild(saveButton);

// script.js (continued)

// Function to load the saved cards
function loadCards() {
	let cardData = JSON.parse(localStorage.getItem('cards'));
	cardData.forEach((card, index) => {
		let cardElement = cards[index];
		cardElement.querySelector('h2').textContent = card.title;
		cardElement.querySelector('p').textContent = card.content;
	});
}

// Load the saved cards when the page loads
loadCards();

// Create a separate HTML file for each card
for (let i = 0; i < 100; i++) {
	let cardContent = `
		<!DOCTYPE html>
		<html>
		<head>
			<title>Card ${i + 1}</title>
			<link rel="stylesheet" href="style.css">
		</head>
		<body>
			<h1>Card ${i + 1}</h1>
			<p>Card content ${i + 1}</p>
		</body>
		</html>
	`;

	let cardFile = `card${i + 1}.html`;
	fs.writeFileSync(cardFile, cardContent);
}

let cardContent = `
	<!DOCTYPE html>
	<html>
	<head>
		<title>Card ${i + 1}</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<div class="opened-card">
			<h1>Card ${i + 1}</h1>
			<textarea id="card-content" style="font-family: Times New Roman; font-size: 18px; width: 80%; height: 300px;"></textarea>
		</div>
	</body>
	</html>
`;