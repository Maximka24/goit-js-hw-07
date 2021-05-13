const refs = {
	numberInput: document.querySelector('#controls input'),
	rendBtn: document.querySelector('[data-action="render"]'),
	destBtn: document.querySelector('[data-action="destroy"]'),
	boxEls: document.querySelector('#boxes'),
};
// refs.boxEls.style.display = 'flex';

refs.rendBtn.addEventListener('click', onCreateBoxes);
refs.destBtn.addEventListener('click', onDestroyBoxes);


let heightEl = 30;
let widthEl = 30;

function onCreateBoxes() {
	const resultValueInput = refs.numberInput.value;
	const elResult = [];
	function addArry (el) {
		for (let i = 1; i <= el; i+=1) {
			elResult.push(i);
		};
	};
	addArry(resultValueInput);
	
	const mapNewArry = elResult.map(el => {
		const elArry = document.createElement('div');
		
		elArry.textContent = `№${el}`;
		elArry.style.backgroundColor = `rgb(${addStyleColor()}, ${addStyleColor()}, ${addStyleColor()})`;
		elArry.style.width = `${widthEl}px`;
		elArry.style.height = `${heightEl}px`;
		
		addStyleWidth();
		addStyleHeight();
		
		return elArry;
	});	

	refs.boxEls.append(...mapNewArry);
};

function onDestroyBoxes() {
	refs.boxEls.innerHTML = "";
};


function addStyleColor() {
	return `${Math.floor(Math.random() * 500)}`;
};

function addStyleWidth() {
	return widthEl += 10;
};

function addStyleHeight() {
	return heightEl +=10;
};

