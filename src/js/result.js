import { images } from "./images";
import { imgWrapper } from "./renderImg";

const content = document.querySelector('.main__inner');
const title = content.querySelector('.main__title h2');
const variableItems = document.querySelectorAll('.variables__item');

let success = 0;
let error = 0;

const processResults = () => {
	variableItems.forEach(item => {
		const imgs = item.querySelectorAll('.variables__select li img')

		imgs.forEach(img => {
			images.forEach(element => {
				if(img.getAttribute('data-value') == element.id) {
					if(element.var == item.getAttribute('id')) {
						img.style.border = '2px solid green'
						success++;
					}else {
						img.style.border = '2px solid red';
						error++
					}
				}
			});
		})
	})
}


export const showResult = () => {
	content.classList.add('result');
	title.textContent = "Результат";
	processResults();

	imgWrapper.innerHTML = `<h3>Верно ${success}</h3><h3>Неверно ${error}</h3>`
}


