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
