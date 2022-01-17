import { createElement } from '../helpers/domHelper.mjs';

const appendRoomElement = ({ name, numberOfUsers, onJoin = () => {} }) => {
	const roomsContainer = document.querySelector('#rooms-wrapper');

	const nameElement = createElement({
		tagName: 'div',
		className: 'room-name',
		attributes: { 'data-room-name': name },
		innerElements: [name],
	});

	const numberOfUsersString = getNumberOfUsersString(numberOfUsers);
	const connectedUsersElement = createElement({
		tagName: 'div',
		className: 'connected-users',
		attributes: { 'data-room-name': name, 'data-room-number-of-users': numberOfUsers },
		innerElements: [numberOfUsersString],
	});

	const joinButton = createElement({
		tagName: 'button',
		className: 'join-btn',
		attributes: { 'data-room-name': name },
		innerElements: ['Join'],
	});

	const roomElement = createElement({
		tagName: 'div',
		className: 'room',
		attributes: { 'data-room-name': name },
		innerElements: [nameElement, connectedUsersElement, joinButton],
	});

	roomsContainer.append(roomElement);

	joinButton.addEventListener('click', onJoin);

	return roomElement;
};

const updateNumberOfUsersInRoom = ({ name, numberOfUsers }) => {
	const roomConnectedUsersElement = document.querySelector(`.connected-users[data-room-name='${name}']`);
	roomConnectedUsersElement.innerText = getNumberOfUsersString(numberOfUsers);
	roomConnectedUsersElement.dataset.roomNumberOfUsers = numberOfUsers;
};

const getNumberOfUsersString = numberOfUsers => `${numberOfUsers} connected`;

const removeRoomElement = name => document.querySelector(`.room[data-room-name='${name}']`)?.remove();

export { appendRoomElement, updateNumberOfUsersInRoom, removeRoomElement };
