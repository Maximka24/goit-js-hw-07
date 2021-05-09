
const refs = {
	input: document.querySelector('#font-size-control'),
	text: document.querySelector('#text'),
};

refs.input.addEventListener('input', onTransformSizeText);

function onTransformSizeText() {
	refs.text.style.fontSize = `${refs.input.valueAsNumber}px`;
}