const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients')



const ingredientsList = ingredients.map(ingredient => {
	const elem = document.createElement('li');
	elem.textContent = `${ingredient}`;

	return elem;
})


ingredientsRef.append(...ingredientsList);


	
