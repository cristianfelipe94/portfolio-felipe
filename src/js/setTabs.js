//  Setter path for tabs and them content.
// //////////////////////////////////////
const tabsArray = [];
function tab(selector) {
	const elements = selector;
	for (const element of elements) {
		const links = element.querySelectorAll('ul > li');

		const listItem = element.querySelectorAll('div .content-page-hidden');
		tabsArray.push(listItem);

		for (const link of links) {
			link.addEventListener('click', function change(e) {
				clear();
				let insideElement = link.children[0];
				const tabsOption = insideElement.getAttribute('href');
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
// //////////////////////////////////////
