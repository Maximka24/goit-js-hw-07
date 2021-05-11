

const refs = {
	counterValue: document.querySelector('#value'),
	decrButton: document.querySelector('[data-action="decrement"]'),
	incrButton: document.querySelector('[data-action="increment"]'),
};

let resultWorksBtn = 0;

refs.incrButton.addEventListener('click', onIncrement);
refs.decrButton.addEventListener('click', onDecrement);


function onIncrement() {
	resultWorksBtn += 1;
	refs.counterValue.textContent = `${resultWorksBtn}`;
	
};

function onDecrement() {
	resultWorksBtn -= 1;
	refs.counterValue.textContent = `${resultWorksBtn}`;

};

