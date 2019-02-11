const helloBtn = document.getElementById('js-hello');
const landingPage = document.getElementById('js-landing-page');
const VerticalTabs = document.getElementById('js-tabs-wrapper');
const btnClose = document.getElementById('js-btn-close');

const contentBlock = document.getElementById('js-content-wrapper');
const portFolioContent = document.getElementById('js-wrapper-seccion');

helloBtn.addEventListener('click', function () {
    landingPage.setAttribute('class', 'landing-wrapper-hidden');
    VerticalTabs.setAttribute('class', 'tabs-wrapper-showing');
    contentBlock.setAttribute('class', 'content-wrapper-showing');
    portFolioContent.setAttribute('class', 'content-page-showing');
});

btnClose.addEventListener('click', function () {
    console.log('closing');
    landingPage.setAttribute('class', 'landing-wrapper-showing');
    VerticalTabs.setAttribute('class', 'tabs-wrapper-hidden');
    contentBlock.setAttribute('class', 'content-wrapper-hidden');
    portFolioContent.setAttribute('class', 'content-page-hidden');
});
