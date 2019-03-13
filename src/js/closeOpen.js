// Close and Open animator.
// ////////////////////////
helloBtn.addEventListener('click', function () {
	statusSize = 0;
  sizeName.innerText = '';

	langWrapperDisplay.setAttribute('class','lang-opacity-delay');
  socialWrapperDisplay.setAttribute('class','social-opacity-delay');

  backgroundImg.setAttribute('class', 'background-img-showing');

  const tabsMoveDelay = (() => {
    for (const e of VerticalTabs) {
      e.setAttribute('class', 'tabs-info-wrapper-showing');
    }
  });
  setTimeout(tabsMoveDelay, 1000);

	const signatureLogoDelay = (() => {
		signWrapperDisplay.setAttribute('class', 'sign-opacity-delay');
  });
  setTimeout(signatureLogoDelay, 2000);

  const landingPageDelay = (() => {
    landingPage.setAttribute('class', 'landingPageMoves');
  });
  setTimeout(landingPageDelay, 5000);

  const contentInfoDelay = (() => {
    showingElements(homeContentBlock);
  });
  setTimeout(contentInfoDelay, 7000);

  const btnCloseDelay = (() => {
    btnClose.setAttribute('class', 'btnAction-showing');
  });
  setTimeout(btnCloseDelay, 8000);
});
btnClose.addEventListener('click', (() => {
	statusSize = 1;
	if (counterSize === 0) {
		sizeName.innerText = 'Letra pequeña.';
	} else if (counterSize === 1) {
		sizeName.innerText = 'Letra mediana.';
	} else if (counterSize === 2) {
		sizeName.innerText = 'Letra larga.';
  }

  btnClose.setAttribute('class', 'btnAction-hidden');

  const landingPageDelay = (() => {
    landingPage.setAttribute('class', 'landing-page-wrapper');
  });
  setTimeout(landingPageDelay, 4000);

  const tabsMoveDelay = (() => {
    for (const e of VerticalTabs) {
			e.setAttribute('class', 'tabs-info-wrapper-hidden');
    }
  });
  setTimeout(tabsMoveDelay, 5000);

  const contentInfoDelay = (() => {
    tabsArray.forEach((element) => {
      for (const i of element) {
        if (i.className === 'content-page-showing') {
          hiddingElements(i);
        }
      }
    });
  });
  setTimeout(contentInfoDelay, 1000);
  
  const backgroundHiddenDelay = (() => {
    langWrapperDisplay.setAttribute('class', 'lang');
    socialWrapperDisplay.setAttribute('class', 'social');
    signWrapperDisplay.setAttribute('class', 'sign');
    backgroundImg.setAttribute('class', 'background-img-hidden');
  });
  setTimeout(backgroundHiddenDelay, 7000);
}));
// ////////////////////////
