import {images} from './images.js';
const imgWrapper = document.getElementById('img');

let usedImages = [];
let currentIndex = 1;

//перемешать массив от 1 до n
const shuffleArr = (n) => {
	const arr = Array.from({ length: n }, (v, i) =>  i + 1);
	const shuffledArr = arr.map(i=>[Math.random(), i]).sort().map(i=>i[1]);
	/* console.log(shuffledArr) */
	return shuffledArr;
}

//создать массив с путями до картинок
const createImagesArr = (arr) => {

	let createArr = arr.map((item, i) => {
		let img = new Image();
		img.src = require(`../assets/images/${item}.jpg`);
		return img.src;
	})

	//console.log("createArr")
	//console.log(createArr)
	return createArr;
}

//показать первую картинку при загрузке
const showFirstImg = (arr) => {

	let img = new Image();
	img.src = arr[0];
	imgWrapper.append(img);

	usedImages.push(img.src);
}

//показать следующую картинку
export const showNextImg = (arr) => {
	imgWrapper.innerHTML = '';

	arr.forEach((item, i) => {
		if(i == 0) return;

		if(i == currentIndex) {

			let img = new Image();
			img.src = arr[i];
			imgWrapper.append(img);

		}
	})
	if(currentIndex == arr.length){
		//imgWrapper.innerHTML = '';
		let p = document.createElement('h3');
		p.innerHTML = `картинки закончились`;
		imgWrapper.append(p);
	}
	if (currentIndex < arr.length) currentIndex++

	return;
}

//клик по картинке
/* const showImg = () => {

	imgWrapper.addEventListener('click', () => {
		showNextImg(pathImgArr);
	})
} */

let value = 15; // общее число картинок
let mixedArr = shuffleArr(value); // перемешанный массив
export let pathImgArr = createImagesArr(mixedArr); // массив с путями картинок

showFirstImg(pathImgArr);
//showImg();

