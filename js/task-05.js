const refs = {
	input: document.querySelector('#name-input'),
	nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
	const checkInputValue = "";
	

	if (checkInputValue === `${refs.input.value}`) {
		refs.nameLabel.textContent = 'незнакомец';
		return;
	}	
	refs.nameLabel.textContent = event.currentTarget.value;
			
}