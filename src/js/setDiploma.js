// Diploma elements generator.
// ///////////////////////////
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
// ///////////////////////////
