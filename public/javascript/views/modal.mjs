import { createElement } from '../helpers/domHelper.mjs';

const showInputModal = ({ title, onChange = () => {}, onSubmit = () => {} }) => {
	const rootElement = document.querySelector('#root');

	const modalElement = createModalElement(title);

	const submitButton = createElement({
		tagName: 'button',
		className: 'submit-btn',
		innerElements: ['Submit'],
	});
	const inputElement = createElement({
		tagName: 'input',
		className: 'modal-input',
	});

	modalElement.append(getFooter([inputElement, submitButton]));
	rootElement.append(modalElement);

	submitButton.addEventListener('click', () => {
		modalElement.remove();
		onSubmit();
	});
	inputElement.addEventListener('change', e => onChange(e.target.value));
};

const showResultsModal = ({ usersSortedArray, onClose = () => {} }) => {
	const rootElement = document.querySelector('#root');

	const modalElement = createModalElement('Results: ');

	const resultElements = usersSortedArray.map((username, index) => {
		const place = ++index;

		return createElement({
			tagName: 'div',
			className: 'user-result',
			attributes: { 'data-username': username, 'data-place': place },
			innerElements: [`${place}) ${username}`],
		});
	});

	const bodyWrapper = createElement({
		tagName: 'div',
		className: 'body-wrapper',
		innerElements: resultElements,
	});

	const closeButton = createElement({
		tagName: 'button',
		className: 'submit-btn',
		attributes: { id: 'quit-results-btn' },
		innerElements: ['Close'],
	});

	modalElement.append(bodyWrapper);
	modalElement.append(getFooter([closeButton]));
	rootElement.append(modalElement);

	closeButton.addEventListener('click', () => {
		modalElement.remove();
		onClose();
	});
};

const showMessageModal = ({ message, onClose = () => {} }) => {
	const rootElement = document.querySelector('#root');

	const modalElement = createModalElement(message);

	const closeButton = createElement({
		tagName: 'button',
		className: 'submit-btn',
		innerElements: ['Close'],
	});

	modalElement.append(getFooter([closeButton]));
	rootElement.append(modalElement);

	closeButton.addEventListener('click', () => {
		modalElement.remove();
		onClose();
	});
};

const createModalElement = title => {
	const titleElement = createElement({
		tagName: 'h1',
		className: 'title',
		innerElements: [title],
	});

	const modal = createElement({
		tagName: 'div',
		className: 'modal',
		innerElements: [titleElement],
	});

	return modal;
};

const getFooter = children => {
	return createElement({
		tagName: 'div',
		className: 'inputs-wrapper',
		innerElements: children,
	});
};

export { showInputModal, showResultsModal, showMessageModal };
