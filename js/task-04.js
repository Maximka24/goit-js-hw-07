

const refs = {
	counterValue: document.querySelector('#value'),
	decrButton: document.querySelector('[data-action="decrement"]'),
	incrButton: document.querySelector('[data-action="increment"]'),
};


refs.incrButton.addEventListener('click', onIncrement);
refs.decrButton.addEventListener('click', onDecrement);

function onIncrement() {
	if (Number(refs.counterValue.textContent) >= 0) {
		refs.counterValue.textContent = Number(refs.counterValue.textContent) + 1;
	}
};

function onDecrement() {
	if (Number(refs.counterValue.textContent) > 0) {
		refs.counterValue.textContent = Number(refs.counterValue.textContent) - 1;
	}
};