const bodyDom = document.querySelector('body');
const helloBtn = document.getElementById('js-hello');
const landingPage = document.getElementById('js-landingpage');
const VerticalTabs = document.querySelectorAll('#js-tabs-info-wrapper');
const btnClose = document.getElementById('js-btn-close');
const homeContentBlock = document.getElementById('js-home-page');
const portContentBlock = document.getElementById('js-port-page');
const projectsWrapper = document.getElementById('js-projects-wrapper');

const educationContentBlock = document.getElementById('js-diploma-page');

const backgroundImg = document.getElementById('js-background-img');

const backgroundModal = document.getElementById('js-modal');
const closeModalBtn = document.getElementById('js-close-modal');

const portFolioContent = document.getElementById('js-wrapper-portfolio');

const tabsDom = document.getElementsByClassName('tab-items');

const activityContentBlock = document.getElementById('js-activity-list');

const btnSizer = document.getElementById('js-btn-size');
const sizeName = document.getElementById('js-size-name');

function hiddingElements(elementsToBeHide) {
	elementsToBeHide.className = 'content-page-hidden';
}

function showingElements(elementsToBeShown) {
	elementsToBeShown.className = 'content-page-showing';
}

function generateRandomNumb (maxValue) {
	const maxNumber = maxValue;
	const indexNumb = parseInt(Math.random() * maxValue);
	return indexNumb;
}

let counterSize = 0;
let statusSize = 1;
btnSizer.addEventListener('click', () => {
	if (statusSize === 1) {
		if (counterSize === 0) {
			sizeName.innerText = '';
			sizeName.innerText = 'Letra mediana.';
			bodyDom.setAttribute('class', 'content-relativeness-medium');
			counterSize += 1;
		} else if (counterSize === 1) {
			sizeName.innerText = '';
			sizeName.innerText = 'Letra larga.';
			bodyDom.setAttribute('class', 'content-relativeness-large');
			counterSize += 1;
		} else if (counterSize === 2) {
			sizeName.innerText = '';
			sizeName.innerText = 'Letra pequeña.';
			bodyDom.setAttribute('class', 'content-relativeness-normal');
			counterSize = 0;
		}
	} else if (statusSize === 0) {
		if (counterSize === 0) {
			sizeName.innerText = '';
			bodyDom.setAttribute('class', 'content-relativeness-medium');
			counterSize += 1;
		} else if (counterSize === 1) {
			sizeName.innerText = '';
			bodyDom.setAttribute('class', 'content-relativeness-large');
			counterSize += 1;
		} else if (counterSize === 2) {
			sizeName.innerText = '';
			bodyDom.setAttribute('class', 'content-relativeness-normal');
			counterSize = 0;
		}
	}
});

const maxResponse = 10;
const request = new XMLHttpRequest();

function generateResponseElements(event) {
	const response = event.target.response;
	for (let e = 0; e < maxResponse; e++) {
		const activityItem = document.createElement('li');
		const activityDate = document.createElement('p');
		const activityCommit = document.createElement('p');
		const activityName = document.createElement('p');
		const activityUrl = document.createElement('a');

		const responseUrlName = response[e].repo.name;
		const responseUrlDomain = 'https://github.com/';
		const responseFinalUrl = `${responseUrlDomain}${responseUrlName}`;
		const responseTypeAction = response[e].type;
		const responseDate = response[e].created_at;
		const responseDateFormated = responseDate.slice(0, 10).split('-').reverse().join('.');

		let responseMessage = response[e].payload.commits;
		if (responseMessage !== undefined) {
			responseMessage = response[e].payload.commits[0].message;
			activityUrl.setAttribute('href', responseFinalUrl);
			activityUrl.setAttribute('target', '_blank');
			activityUrl.setAttribute('class', 'activity-url-color');

			activityDate.innerText = responseDateFormated;
			activityCommit.innerText = responseMessage;
			activityName.innerText = responseTypeAction;
			activityUrl.innerText = responseFinalUrl;

			activityItem.appendChild(activityDate);
			activityItem.appendChild(activityCommit);
			activityItem.appendChild(activityName);
			activityItem.appendChild(activityUrl);

			activityItem.setAttribute('class', 'activity-item-wrapper');

			activityContentBlock.appendChild(activityItem);
		} else if (responseMessage === undefined) {
			activityUrl.setAttribute('href', responseFinalUrl);
			activityUrl.setAttribute('target', '_blank');
			activityUrl.setAttribute('class', 'activity-url-color');

			activityDate.innerText = responseDateFormated;
			activityName.innerText = responseTypeAction;
			activityUrl.innerText = responseFinalUrl;

			activityItem.appendChild(activityDate);
			activityItem.appendChild(activityName);
			activityItem.appendChild(activityUrl);

			activityItem.setAttribute('class', 'activity-item-wrapper');

			activityContentBlock.appendChild(activityItem);
		}
	}
}
request.addEventListener('load', generateResponseElements);

// Response the system is waiting.
request.responseType = 'json';

const searchUrl = 'https://api.github.com/users/cristianfelipe94/events';

// Request GET from the API Key.
// API Key: ec6b87893ed99918950286ecdc97bf34.
request.open('GET', searchUrl);
// Sent the Request.
request.send();

helloBtn.addEventListener('click', function () {
	statusSize = 0;
	sizeName.innerText = '';
	btnClose.setAttribute('class', 'btnAction-showing');
	landingPage.setAttribute('class', 'landingPageMoves');
	for (const e of VerticalTabs) {
		e.setAttribute('class', 'tabs-info-wrapper-showing');
	}
	backgroundImg.setAttribute('class', 'background-img-showing');
	showingElements(homeContentBlock);
});

btnClose.addEventListener('click', function () {
	statusSize = 1;
	if (counterSize === 0) {
		sizeName.innerText = 'Letra pequeña.';
	} else if (counterSize === 1) {
		sizeName.innerText = 'Letra mediana.';
	} else if (counterSize === 2) {
		sizeName.innerText = 'Letra larga.';
	}
	btnClose.setAttribute('class', 'btnAction-hidden');
	landingPage.setAttribute('class', 'landing-page-wrapper');
	for (const e of VerticalTabs) {
			e.setAttribute('class', 'tabs-info-wrapper-hidden');
	};

	tabsArray.forEach(element => {
		for (const i of element) {
			if (i.className === 'content-page-showing') {
				hiddingElements(i);
			}
		}
	});
	backgroundImg.setAttribute('class', 'background-img-hidden');
});

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

const tabsArray = [];
function tab(selector) {
	const elements = selector;
	for (const element of elements) {
		const links = element.querySelectorAll('ul > li');

		const listItem = element.querySelectorAll('div .content-page-hidden');
		tabsArray.push(listItem);

		for (const link of links) {
			link.addEventListener('click', function change(e) {
				clear();
				let insideElement = link.children[0];
				const tabsOption = insideElement.getAttribute('href');
				let tabsContent = element.querySelector(tabsOption);
				showingElements(tabsContent);
			});
			function clear() {
				for (const item of listItem) {
					hiddingElements(item);
				}
			}
		}
	}
}
tab(VerticalTabs);

const imgPortArray = [
	imgPort1 = {
		src: '../img/canvas_game_port1.jpg',
		alt: 'canvas mini game picture',
		href: 'https://cristianfelipe94.github.io/CanvasGame/',
		type: 'game',
	},
	imgPort2 = {
		src: '../img/derrota_palabra_port1.jpg',
		alt: 'derrota la palabra game picture',
		href: 'https://cristianfelipe94.github.io/Derrota-la-Palabra/',
		type: 'game',
	},
	imgPort3 = {
		src: '../img/tiny_one_port1.jpg',
		alt: 'tiny one picture',
		href: 'https://cristianfelipe94.github.io/TinyOneWebSite/',
		type: 'page',
	},
	imgPort4 = {
		src: '../img/folio_port1.jpg',
		alt: 'folio picture',
		href: 'https://cristianfelipe94.github.io/Final-Test./',
		type: 'page',
	},
	imgPort5 = {
		src: '../img/blaz_port1.jpg',
		alt: 'blaz game picture',
		href: 'https://cristianfelipe94.github.io/BlazRobarWebsite/',
		type: 'page',
	},
	imgPort6 = {
		src: '../img/cuda_port1.jpg',
		alt: 'cuda game picture',
		href: 'https://cristianfelipe94.github.io/ExamenWeb/',
		type: 'page',
	},
];

imgPortArray.forEach((element) => {
	const elementSrc = element.src;
	const elementAlt = element.alt;
	const elementUrl = element.href;
	const elementTypeOf = element.type;
	const elementPort = document.createElement('img');
	const portElementWrapper = document.createElement('div');
	portElementWrapper.setAttribute('class', 'portfolio-wrappers');
	if (elementTypeOf === 'game') {
		const gameLink = document.createElement('a');
		gameLink.setAttribute('class', 'portfolio-icons fas fa-gamepad');
		gameLink.setAttribute('href', elementUrl);
		gameLink.setAttribute('target', '_blank');
		portElementWrapper.appendChild(gameLink);
	} else if (elementTypeOf === 'page') {
		const pageLink = document.createElement('a');
		pageLink.setAttribute('class', 'portfolio-icons fas fa-eye');
		pageLink.setAttribute('href', elementUrl);
		pageLink.setAttribute('target', '_blank');
		portElementWrapper.appendChild(pageLink);
	}
	elementPort.setAttribute('src', elementSrc);
	elementPort.setAttribute('alt', elementAlt);
	elementPort.setAttribute('class', 'gallery-port');
	elementPort.addEventListener('click', function () {
		const modalElement = document.createElement('img');

		modalElement.setAttribute('src', elementSrc);
		modalElement.setAttribute('class', 'modal-img-display');

		backgroundModal.setAttribute('class', 'modal-content-display');

		closeModalBtn.addEventListener('click', function () {
				backgroundModal.setAttribute('class', 'modal-content-hide');
		});

		backgroundModal.appendChild(modalElement);
	});
	portElementWrapper.appendChild(elementPort);
	projectsWrapper.appendChild(portElementWrapper);
});
closeModalBtn.addEventListener('click', function () {
	backgroundModal.setAttribute('class', 'modal-content-hide');
});

const diplomaContent = [
	diploma1 = {
		src: 'img/diploma.png',
		alt: 'diploma information',
		content: 'Título de Diseño y Desarrollo Web CETAV',
		date: 'Fecha CETAV',
	},
	diploma2 = {
		src: 'img/diploma.png',
		alt: 'diploma information',
		content: 'Título de Pronunciación Inglesa INA',
		date: 'Fecha INA',
	},
	diploma3 = {
		src: 'img/diploma.png',
		alt: 'diploma information',
		content: 'Titulo de Aplicaciones Ofimáticas INA',
		date: 'Fecha INA',
	},
	diploma4 = {
		src: 'img/diploma.png',
		alt: 'diploma information',
		content: 'Título de Secundaria Liceo Anastasio Alfaro',
		date: 'Fecha Secundaria',
	},
	diploma5 = {
		src: 'img/diploma.png',
		alt: 'diploma information',
		content: 'Título de Primaria Escuela Roberto Cantillano Vindas',
		date: 'Fecha Primaria',
	},
];

diplomaContent.forEach((element) => {
	const srcElement = element.src;
	const altElement = element.alt;
	const contentElement = element.content;
	const dateElement = element.date;

	const elementListItem = document.createElement('li');
	const elementLogo = document.createElement('img');
	const elementInformation = document.createElement('p');
	const elementDateInfo = document.createElement('p');

	elementLogo.setAttribute('src', srcElement);
	elementLogo.setAttribute('alt', altElement);
	elementLogo.setAttribute('class', 'diploma-logo-size');

	elementInformation.innerText = contentElement;
	elementInformation.setAttribute('class', 'diploma-content');

	elementDateInfo.innerText = dateElement;
	elementDateInfo.setAttribute('class', 'diploma-date-position');

	elementListItem.setAttribute('class', 'diploma-position');

	elementListItem.appendChild(elementLogo);
	elementListItem.appendChild(elementInformation);
	elementListItem.appendChild(elementDateInfo);

	educationContentBlock.appendChild(elementListItem);
});
