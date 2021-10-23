import {images} from './images.js';
const imgWrapper = document.getElementById('img');

let usedImages = [];
let currentIndex = 1;

//console.log(images)

//перемешать массив от 1 до n
const shuffleArr = (n) => {
	const arr = Array.from({ length: n }, (v, i) =>  i + 1);
	const shuffledArr = arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
	//console.log(shuffledArr)
	return shuffledArr;
}
let arr = shuffleArr(15)
//console.log(arr)


//создать массив с путями до картинок
const createImagesArr = (arr) => {

	let createArr = arr.map((item, i) => {
		let img = new Image();
		img.src = require(`../assets/images/${item}.jpg`)
		return img.src
		//if(i !== 0) imgWrapper.append(img)

	})

	//console.log("createArr")
	//console.log(createArr)
	return createArr;
}
let a = createImagesArr(arr)


//показать первую картинку при загрузке
const showFirstImg = (a) => {

	let img = new Image();
	img.src = a[0]
	imgWrapper.append(img);

	usedImages.push(img.src)
}
showFirstImg(a)
//console.log(usedImages)


//показать следующую картинку
const showNextImg = (a) => {
	imgWrapper.innerHTML = '';

	a.forEach((item, i) => {
		if(i == 0) return;

		if(i == currentIndex) {
			//console.log(item)
			let img = new Image();
			img.src = a[i]
			imgWrapper.append(img);

			/* let p = document.createElement('h3')
			p.innerHTML = `${i}`
			imgWrapper.append(p); */
			return
		}
	})
	if (currentIndex < a.length) currentIndex++

	if(currentIndex == a.length){
		imgWrapper.innerHTML = '';
		let p = document.createElement('h3')
		p.innerHTML = `картинки закончились`
		imgWrapper.append(p);
	}

	//console.log(currentIndex)
	return

	//imgWrapper.append()
}


/* const createImg = (pathArr) => {
	pathArr.forEach(element => {
		console.log(element)
		//imgWrapper.append
	});
}
console.log('pathArr')
createImg(pathArr) */

const showImg = () => {
	//showImg.append()
	//imgWrapper.append()

	imgWrapper.addEventListener('click', () => {
		showNextImg(a)
	})
}



showImg();
createImages();


/* document.addEventListener('click', (e)=> {
	console.log(e.target)
})
 */
