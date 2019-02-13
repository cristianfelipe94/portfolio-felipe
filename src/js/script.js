(function () {
    const helloBtn = document.getElementById('js-hello');
    const landingPage = document.getElementById('js-landingpage');
    const VerticalTabs = document.querySelectorAll('#js-tabs-info-wrapper');
    const btnClose = document.getElementById('js-btn-close');
    const homeContentBlock = document.getElementById('js-home-page');
    const portContentBlock = document.getElementById('js-port-page');

    const backgroundModal = document.getElementById('js-modal');
    const closeModalBtn = document.getElementById('js-close-modal');

    const portFolioContent = document.getElementById('js-wrapper-portfolio');

    const tabsDom = document.getElementsByClassName('tab-items');

    const activityContentBlock = document.getElementById('js-activity-list');

    function hiddingElements(elementsToBeHide) {
        elementsToBeHide.className = 'content-page-hidden';
    }

    function showingElements(elementsToBeShown) {
        elementsToBeShown.className = 'content-page-showing';
    }

    const tabsArray = [];

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

    function tab(selector) {
        const elements = selector;

        for (const element of elements) {

            const links = element.querySelectorAll('ul > li > a');

            const listItem = element.querySelectorAll('div');
            tabsArray.push(listItem);

            for (const link of links) {

                link.addEventListener('click', function change(e) {
                    clear();
                    let tabsOption = e.target.getAttribute('href');
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

    helloBtn.addEventListener('click', function () {

        landingPage.setAttribute('class', 'landingPageMoves');
        for (const e of VerticalTabs) {
            e.setAttribute('class', 'tabs-info-wrapper-showing');
        };

        showingElements(homeContentBlock);
    });

    btnClose.addEventListener('click', function () {

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
    });



    closeModalBtn.addEventListener('click', function () {
        backgroundModal.setAttribute('class', 'modal-content-hide');
    });

    imgPortArray.forEach(element => {
        const elementSrc = element.src;
        const elementAlt = element.alt;
        const elementPort = document.createElement('img');
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
        portContentBlock.appendChild(elementPort);
    });

    const maxResponse = 10;

    const request = new XMLHttpRequest();
    request.addEventListener('load', function (event) {
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
            const responseMessage = response[e].payload.commits[0].message;

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
        }
    });

    // Response the system is waiting.
    request.responseType = 'json';

    const searchUrl = 'https://api.github.com/users/cristianfelipe94/events';

    // Request GET from the API Key.
    // API Key: ec6b87893ed99918950286ecdc97bf34.
    request.open('GET', searchUrl);
    // Sent the Request.
    request.send();

}());
