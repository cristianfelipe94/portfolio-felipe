const maxResponse = 10;
const request = new XMLHttpRequest();

function generateResponseElements(event) {
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

		let responseMessage = response[e].payload.commits;
		if (responseMessage !== undefined) {
			responseMessage = response[e].payload.commits[0].message;
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
		} else if (responseMessage === undefined) {
			activityUrl.setAttribute('href', responseFinalUrl);
			activityUrl.setAttribute('target', '_blank');
			activityUrl.setAttribute('class', 'activity-url-color');

			activityDate.innerText = responseDateFormated;
			activityName.innerText = responseTypeAction;
			activityUrl.innerText = responseFinalUrl;

			activityItem.appendChild(activityDate);
			activityItem.appendChild(activityName);
			activityItem.appendChild(activityUrl);

			activityItem.setAttribute('class', 'activity-item-wrapper');

			activityContentBlock.appendChild(activityItem);
		}
	}
}
request.addEventListener('load', generateResponseElements);

// Response the system is waiting.
request.responseType = 'json';

const searchUrl = 'https://api.github.com/users/cristianfelipe94/events';

// Request GET from the API Key.
// API Key: ec6b87893ed99918950286ecdc97bf34.
request.open('GET', searchUrl);
// Sent the Request.
request.send();
