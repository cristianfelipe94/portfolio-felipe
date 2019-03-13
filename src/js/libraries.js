// Small libraries.
// /////////////////
function hiddingElements(elementsToBeHide) {
	elementsToBeHide.className = 'content-page-hidden';
}

function showingElements(elementsToBeShown) {
	elementsToBeShown.className = 'content-page-showing';
}

function generateRandomNumb (maxValue) {
	const maxNumber = maxValue;
	const indexNumb = parseInt(Math.random() * maxValue);
	return indexNumb;
}

let counterSize = 0;
let statusSize = 1;
btnSizer.addEventListener('click', () => {
	if (statusSize === 1) {
		if (counterSize === 0) {
			sizeName.innerText = '';
			sizeName.innerText = 'Letra mediana.';
			bodyDom.setAttribute('class', 'content-relativeness-medium');
			counterSize += 1;
		} else if (counterSize === 1) {
			sizeName.innerText = '';
			sizeName.innerText = 'Letra larga.';
			bodyDom.setAttribute('class', 'content-relativeness-large');
			counterSize += 1;
		} else if (counterSize === 2) {
			sizeName.innerText = '';
			sizeName.innerText = 'Letra pequeña.';
			bodyDom.setAttribute('class', 'content-relativeness-normal');
			counterSize = 0;
		}
	} else if (statusSize === 0) {
		if (counterSize === 0) {
			sizeName.innerText = '';
			bodyDom.setAttribute('class', 'content-relativeness-medium');
			counterSize += 1;
		} else if (counterSize === 1) {
			sizeName.innerText = '';
			bodyDom.setAttribute('class', 'content-relativeness-large');
			counterSize += 1;
		} else if (counterSize === 2) {
			sizeName.innerText = '';
			bodyDom.setAttribute('class', 'content-relativeness-normal');
			counterSize = 0;
		}
	}
});
// /////////////////
