const helloBtn = document.getElementById('js-hello');
const landingPage = document.getElementById('js-landingpage');
const VerticalTabs = document.getElementById('js-tabs-info-wrapper');
const btnClose = document.getElementById('js-btn-close');
const contentBlock = document.getElementById('content-block');

const portFolioContent = document.getElementById('js-wrapper-portfolio');

helloBtn.addEventListener('click', function () {
    landingPage.setAttribute('class', 'landingPageMoves');
    VerticalTabs.setAttribute('class', 'tabs-info-wrapper-showing');
    contentBlock.setAttribute('class', 'content-page-showing');
    portFolioContent.setAttribute('class', 'content-inside-wrapper-showing');
});

btnClose.addEventListener('click', function () {
    console.log('closing');
    landingPage.setAttribute('class', 'landing-page-wrapper');
    VerticalTabs.setAttribute('class', 'tabs-info-wrapper-hidden');
    contentBlock.setAttribute('class', 'content-page-hidden');
    portFolioContent.setAttribute('class', 'content-inside-wrapper-hidden');
});
