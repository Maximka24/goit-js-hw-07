const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputChange);

function onInputChange(event) {
	const CONST_LENGTH = Number(input.dataset.length);
	
	if (event.currentTarget.value.length < CONST_LENGTH) {
		input.classList.remove('valid');
		input.classList.add('invalid');
	} else {
		input.classList.remove('invalid');
		input.classList.add('valid');
	};
}