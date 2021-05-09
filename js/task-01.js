
const categoriesRef = document.querySelectorAll('.item');

console.log(`В списке ${categoriesRef.length} категории.`);

categoriesRef.forEach(category => {
		
	console.log(`Категория: ${category.firstElementChild.textContent}`);
	
	const list = category.querySelectorAll('.item li')
	console.log(`Количество элементов: ${list.length}`);

});



