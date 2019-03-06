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
