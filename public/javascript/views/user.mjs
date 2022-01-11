import { addClass } from '../helpers/domHelper.mjs';
import { createElement } from '../helpers/domHelper.mjs';

const appendUserElement = ({ username, ready, isCurrentUser }) => {
	const usersContainer = document.querySelector('#users-wrapper');

	const usernameElement = createElement({
		tagName: 'div',
		className: 'username',
		attributes: { 'data-username': username },
		innerElements: [isCurrentUser ? `${username} (you)` : username],
	});

	const readyStatusElement = createElement({
		tagName: 'div',
		className: 'ready-status',
		attributes: { 'data-username': username, 'data-ready': Boolean(ready) },
		innerElements: [getReadySign(ready)],
	});

	const headerWrapper = createElement({
		tagName: 'div',
		className: 'user-header',
		attributes: { 'data-username': username },
		innerElements: [readyStatusElement, usernameElement],
	});

	const progressElement = createElement({
		tagName: 'div',
		className: 'user-progress',
		attributes: { 'data-username': username, style: `width: 0%;` },
	});

	const progressElementBlock = createElement({
		tagName: 'div',
		className: 'user-progress-template',
		innerElements: [progressElement],
	});

	const userElement = createElement({
		tagName: 'div',
		className: 'user',
		attributes: { 'data-username': username },
		innerElements: [headerWrapper, progressElementBlock],
	});

	usersContainer.append(userElement);

	return userElement;
};

const changeReadyStatus = ({ username, ready }) => {
	const readyStatusElement = document.querySelector(`.ready-status[data-username='${username}']`);
	readyStatusElement.innerHTML = getReadySign(ready);
	readyStatusElement.dataset.ready = Boolean(ready);
};

const setProgress = ({ username, progress }) => {
	const progressElement = document.querySelector(`.user-progress[data-username='${username}']`);

	if (progress === 100) {
		progressElement.style.width = `${progress}%`;
		addClass(progressElement, 'finished');
	} else {
		progressElement.style.width = `${progress}%`;
	}
};

const removeUserElement = username => document.querySelector(`.user[data-username='${username}']`)?.remove();

const getReadySign = ready => (ready ? '🟢' : '🔴');

export { appendUserElement, changeReadyStatus, setProgress, removeUserElement };
