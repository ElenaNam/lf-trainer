import {images} from './images.js';
import {showResult} from './result';
export const imgWrapper = document.getElementById('img');

const countWrapper = document.getElementById('count');


let usedImages = [];
let currentIndex = 1;
let value = 15; // общее число картинок
let countAll = value; //счетчик всего
let countCurrent = 1; //счетчик текущий

//увеличить счетчик
const upCounter = () => {
	if( countCurrent < countAll)
	countCurrent ++;
	return countCurrent;
}
//показать счетчик
const showCounter = (val, countAll) => {
	countWrapper.innerHTML = `${val}/${countAll}`;
}
const removeCounter = () => {
	countWrapper.innerHTML = '';
}

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
	img.alt = '';
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
			img.alt = '';
			img.src = arr[i];
			imgWrapper.append(img);

			let countNew = upCounter();
			showCounter(countNew, countAll)
		}
	})
	if(currentIndex == arr.length){
		showResult();
		removeCounter();
	}
	if (currentIndex < arr.length) currentIndex++

	return;
}

let mixedArr = shuffleArr(value); // перемешанный массив
export let pathImgArr = createImagesArr(mixedArr); // массив с путями картинок

showFirstImg(pathImgArr);
showCounter(countCurrent, countAll)
//showImg();

