const helloBtn = document.getElementById('js-hello');
const landingPage = document.getElementById('js-landing-page');
const VerticalTabs = document.getElementById('js-tabs-wrapper');
const btnClose = document.getElementById('js-btn-close');
const sliderTabs = document.getElementById('js-tabs-slider');
const contentBlock = document.getElementById('js-content-wrapper');
const portFolioContent = document.getElementById('js-wrapper-seccion');

const imgPortArray = [
    imgPort1 = {
        src: '../img/canvas_game_port1.jpg',
        alt: 'canvas mini game picture',
    },
    imgPort2 = {
        src: '../img/derrota_palabra_port1.jpg',
        alt: 'derrota la palabra game picture',
    },
    imgPort3 = {
        src: '../img/tiny_one_port1.jpg',
        alt: 'tiny one picture',
    },
    imgPort4 = {
        src: '../img/folio_port1.jpg',
        alt: 'folio picture',
    },
    imgPort5 = {
        src: '../img/blaz_port1.jpg',
        alt: 'blaz game picture',
    },
    imgPort6 = {
        src: '../img/cuda_port1.jpg',
        alt: 'cuda game picture',
    },
];

imgPortArray.forEach(element => {
    const elementSrc = element.src;
    const elementAlt = element.alt;
    const elementPort = document.createElement('img');
    elementPort.setAttribute('src', elementSrc);
    elementPort.setAttribute('alt', elementAlt);
    elementPort.setAttribute('class', 'gallery-port');
    elementPort.addEventListener('click', function () {
        console.log('modal');
    });
    portFolioContent.appendChild(elementPort);
});

helloBtn.addEventListener('click', function () {
    landingPage.setAttribute('class', 'landing-wrapper-showing');
    VerticalTabs.setAttribute('class', 'tabs-wrapper-showing');
    contentBlock.setAttribute('class', 'content-wrapper-showing');
    portFolioContent.setAttribute('class', 'content-page-showing');
});

btnClose.addEventListener('click', function () {
    console.log('closing');
    landingPage.setAttribute('class', 'landing-wrapper-hidden');
    VerticalTabs.setAttribute('class', 'tabs-wrapper-hidden');
    contentBlock.setAttribute('class', 'content-wrapper-hidden');
    portFolioContent.setAttribute('class', 'content-page-hidden');
});
