const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// ------------>    вариант №1 сдачи ДЗ -------------------------


// const imgGallaryRef = document.querySelector('#gallery');

// const imgListRef = images.map(({url, alt}) => {
// 	const listImg = document.createElement('li');

// 	const elemImg = document.createElement('img');
// 	elemImg.src = `${url}`;
// 	elemImg.alt = `${alt}`;
// 	elemImg.width = 320;
	
// 	listImg.appendChild(elemImg);
	
// 	return listImg;
// });

// imgGallaryRef.append(...imgListRef);



// ---------->     вариант №2 сдачи ДЗ--------------------------

const imgGallaryRef = document.querySelector('#gallery');

const makeImgElMarkup = ({ url, alt }) => {
	return `
	<li>
		<img src=${url} alt=${alt} width=320>
	</li>`;
};

const makeImgEl = images
	.map(makeImgElMarkup)
	.join('');

imgGallaryRef.insertAdjacentHTML('afterbegin', makeImgEl);
