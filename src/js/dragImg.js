import {showNextImg} from './renderImg.js'
import {pathImgArr} from './renderImg.js'

export const variables = document.querySelector('.variables__wrapper');
const selectedLists = document.querySelectorAll('.variables__item ul');

const dragImage = () => {
	const imageAll = document.querySelectorAll('#img img');

	for (const image of imageAll) {
		image.draggable = true;
		//console.log(image)
		//let imgClone = image.cloneNode();
		//imgClone.classList.add('clone')
		//image.parentElement.insertAfter(imgClone, image)
		//imgClone.style.transform = 'scale(.5)';

		//let clone = new Image();

	/* 	clone.src = 'https://w7.pngwing.com/pngs/289/636/png-transparent-information-info-symbol-circle-black-icon-data-details.png';
		document.body.appendChild(clone)
		clone.style.position = "absolute";
		clone.style.top = "-1000px";
		clone.style.border = '3px solid blue';
		clone.style.transform = 'scale(.5)';
		clone.classList.add('clone') */

		image.addEventListener(`dragstart`, (e) => {
			e.target.classList.add(`selected`);
			//console.log(e.dataTransfer)
			//e.target.style.transform = 'scale(.5)';
			let value = e.target.getAttribute('src').match(/\d+(?=.jpg|.png|.jpeg)/);
			//console.log(imgClone)
			//let imageClone = document.querySelector(`#img img[data-value="${value}"]`);

			//imgClone.classList.add('clone')
			//let currentClone = image.parentElement.insertBefore(imgClone, image);

		//clone.style.transform = 'scale(.5)'

			//e.dataTransfer.setData('text', e.target.id)
			//e.dataTransfer.setDragImage(imgClone, 10,10);
		})

		image.addEventListener(`dragend`, (e) => {
			//e.dataTransfer.setDragImage(image, 10,10);
			e.target.classList.remove(`selected`);

		});
	}
}

variables.addEventListener(`dragover`, (e) => {
	e.preventDefault()

	if(e.target.classList.contains('variables__item')){
		e.target.classList.add('selected')
	}

}, true)

variables.addEventListener(`dragleave`, (e) => {
	e.preventDefault()
	if(e.target.classList.contains('variables__item')){
		e.target.classList.remove('selected');
	}
})

/* const preventDragging = () => {
	const selectedImgs = variables.querySelectorAll('img');
	selectedImgs.forEach(img => {
		img.addEventListener('dragstart', ()=> {
			alert('drag')
			return false;
		})
	})
} */

variables.addEventListener(`drop`, (e) => {
	e.preventDefault()

	if(e.target.classList.contains('variables__item')) {
		let ul = e.target.children[0].children[0]
		let li = document.createElement('li')
		e.target.classList.remove('selected')


		const activeElement = document.querySelector(`.selected`);

		ul.appendChild(li)
		li.append(activeElement)

		showNextImg(pathImgArr)
		dragImage()
		/* preventDragging() */
	}
})

dragImage();


