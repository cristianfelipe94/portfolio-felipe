(function actionIife() {
	helloBtn.addEventListener('click', function () {
		landingPage.setAttribute('class', 'landingPageMoves');
		for (const e of VerticalTabs) {
			e.setAttribute('class', 'tabs-info-wrapper-showing');
		}
		backgroundImg.setAttribute('class', 'background-img-showing');
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
		backgroundImg.setAttribute('class', 'background-img-hidden');
	});
}());
