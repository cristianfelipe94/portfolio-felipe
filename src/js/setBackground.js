// Background image generator.
// ///////////////////////////
const imgBackground = [
	'img/background/ambar.jpg',
	'img/background/ann.jpg',
	'img/background/soft.jpg',
	'img/background/floyd.jpg',
	'img/background/mermaid.jpg',
	'img/background/witch.jpg',
	'img/background/support.jpg',
	'img/background/skinish.jpg',
	'img/background/rights.jpg',
	'img/background/strong.jpg',
	'img/background/zelda.jpg',
];

function loadBackgroundImg() {
	const indexBackground = generateRandomNumb(imgBackground.length);
	backgroundImg.setAttribute('src', imgBackground[indexBackground]);
}
window.addEventListener('load', loadBackgroundImg);
// ///////////////////////////
