// Porfolio projects generator.
// ////////////////////////////
const imgPortArray = [
	imgPort1 = {
		src: 'img/canvas_game_port1.jpg',
		alt: 'canvas mini game picture',
		href: 'https://cristianfelipe94.github.io/CanvasGame/',
		type: 'game',
	},
	imgPort2 = {
		src: 'img/derrota_palabra_port1.jpg',
		alt: 'derrota la palabra game picture',
		href: 'https://cristianfelipe94.github.io/Derrota-la-Palabra/',
		type: 'game',
	},
	imgPort3 = {
		src: 'img/tiny_one_port1.jpg',
		alt: 'tiny one picture',
		href: 'https://cristianfelipe94.github.io/TinyOneWebSite/',
		type: 'page',
	},
	imgPort4 = {
		src: 'img/folio_port1.jpg',
		alt: 'folio picture',
		href: 'https://cristianfelipe94.github.io/Final-Test./',
		type: 'page',
	},
	imgPort5 = {
		src: 'img/blaz_port1.jpg',
		alt: 'blaz game picture',
		href: 'https://cristianfelipe94.github.io/BlazRobarWebsite/',
		type: 'page',
	},
	imgPort6 = {
		src: 'img/cuda_port1.jpg',
		alt: 'cuda game picture',
		href: 'https://cristianfelipe94.github.io/ExamenWeb/',
		type: 'page',
	},
	imgPort7 = {
		src: 'https://cristianfelipe94.github.io/Cheesecake-Banner-Animation/',
		alt: 'Banner made for Prodigious course',
		type: 'banner',
	},
	imgPort8 = {
		src: 'https://cristianfelipe94.github.io/CherryBanner-Prodigious/',
		alt: 'Banner made for Prodigious course',
		type: 'banner',
	},
	imgPort8 = {
		src: 'https://cristianfelipe94.github.io/NutClusters-Banner-Prodigious/',
		alt: 'Banner made for Prodigious course',
		type: 'banner',
  },
  imgPort9 = {
		src: 'https://cristianfelipe94.github.io/LunchableBanner-Prodigious/',
		alt: 'Banner made for Prodigious course',
		type: 'banner',
  },
  imgPort10 = {
		src: 'https://cristianfelipe94.github.io/PlantersBanner-Prodigious/',
		alt: 'Banner made for Prodigious course',
		type: 'banner',
	},
];

imgPortArray.forEach((element) => {
	const elementSrc = element.src;
	const elementAlt = element.alt;
	const elementUrl = element.href;
	const elementTypeOf = element.type;
	let elementPort;
	const portElementWrapper = document.createElement('div');
	portElementWrapper.setAttribute('class', 'portfolio-wrappers');
	if (elementTypeOf === 'game') {
		const gameLink = document.createElement('a');
		elementPort = document.createElement('img');
		gameLink.setAttribute('class', 'portfolio-icons fas fa-gamepad');
		gameLink.setAttribute('href', elementUrl);
		gameLink.setAttribute('target', '_blank');
		portElementWrapper.appendChild(gameLink);
		elementPort.setAttribute('src', elementSrc);
		elementPort.setAttribute('alt', elementAlt);
		elementPort.setAttribute('class', 'gallery-port');
		portElementWrapper.appendChild(elementPort);
		projectsWrapper.appendChild(portElementWrapper);
	} else if (elementTypeOf === 'page') {
		const pageLink = document.createElement('a');
		elementPort = document.createElement('img');
		pageLink.setAttribute('class', 'portfolio-icons fas fa-eye');
		pageLink.setAttribute('href', elementUrl);
		pageLink.setAttribute('target', '_blank');
		portElementWrapper.appendChild(pageLink);
		elementPort.setAttribute('src', elementSrc);
		elementPort.setAttribute('alt', elementAlt);
		elementPort.setAttribute('class', 'gallery-port');
		portElementWrapper.appendChild(elementPort);
		projectsWrapper.appendChild(portElementWrapper);
	} else if (elementTypeOf === 'banner') {
    portElementWrapper.setAttribute('class', 'portfolio-wrapper-banner');
		const pageLink = document.createElement('iframe');
		pageLink.setAttribute('src', elementSrc);
		pageLink.setAttribute('class', 'frame-portfolio-size');
		pageLink.setAttribute('target', '_blank');
		portElementWrapper.appendChild(pageLink);
		projectsWrapper.appendChild(portElementWrapper);
	}
});
// ////////////////////////////
