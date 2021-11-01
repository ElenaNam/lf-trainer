import {showNextImg} from './renderImg.js'
import {pathImgArr} from './renderImg.js'

export const variables = document.querySelector('.variables__wrapper');
const selectedLists = document.querySelectorAll('.variables__item ul');

const dragImage = () => {
	const imageAll = document.querySelectorAll('#img img');

	for (const image of imageAll) {
		image.draggable = true;
		//console.log(image)

		image.addEventListener(`dragstart`, (e) => {
			e.target.classList.add(`selected`);
		})

		image.addEventListener(`dragend`, (e) => {
			e.target.classList.remove(`selected`);
		});
	}
}

/* variables.forEach(variable => {
	variable.addEventListener(`dragover`, (e) => {

		// Находим перемещаемый элемент
		const activeElement = document.querySelector(`.selected`);

		variable.appendChild(activeElement)
	})
}) */
variables.addEventListener(`dragover`, (e) => {
	e.preventDefault()

	if(e.target.classList.contains('variables__item')){
		e.target.classList.add('selected')
	}

}, true)

variables.addEventListener(`dragleave`, (e) => {
	e.preventDefault()
	if(e.target.classList.contains('variables__item')){
		e.target.classList.remove('selected')
		;
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
		let ul = e.target.children[1]
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


