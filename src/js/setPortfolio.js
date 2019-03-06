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
	portContentBlock.appendChild(portElementWrapper);
});
closeModalBtn.addEventListener('click', function () {
	backgroundModal.setAttribute('class', 'modal-content-hide');
});
