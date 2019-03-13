// Close and open js functions.
///////////////////////////////
helloBtn.addEventListener('click', function () {
	statusSize = 0;
	sizeName.innerText = '';

	const btnCloseDelay = (() => {
		btnClose.setAttribute('class', 'btnAction-showing');
	});
	setTimeout(btnCloseDelay,6000);


	const tabsMoveDelay = (()=> {
	backgroundImg.setAttribute('class', 'background-img-showing');
	});
	setTimeout(tabsMoveDelay, 2000);

	const socialDelay = (()=>{
		for (const e of VerticalTabs) {
			e.setAttribute('class', 'tabs-info-wrapper-showing');
		}
	});
	setTimeout(socialDelay, 1000);

	langWrapperDisplay.setAttribute('class','lang-opacity-delay');
	socialWrapperDisplay.setAttribute('class','social-opacity-delay');

	const backgroundImgDelay = (() => {
		showingElements(homeContentBlock);
	});
	setTimeout(backgroundImgDelay, 5000);

	const landingPageDelay = (() => {
		landingPage.setAttribute('class', 'landingPageMoves');
	});
	setTimeout(landingPageDelay, 3000);

	const signatureLogoDelay = (() => {
		signWrapperDisplay.setAttribute('class', 'sign-opacity-delay');
	});
	setTimeout(signatureLogoDelay, 2000);

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
///////////////////////////////
