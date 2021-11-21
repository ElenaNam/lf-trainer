import { images } from "./images";
import { imgWrapper } from "./renderImg";

let value = 15; //TODO:

const content = document.querySelector('.main__inner');
const title = content.querySelector('.main__title');
const variableItems = document.querySelectorAll('.variables__item');
const result = document.getElementById('result');

let success = 0;
let error = 0;
let score = '';

let resultMessages = [
	[	'great', 'Молодец! Отличный результат!'	],
	[	'good', 'Хороший результат! Так держать!'],
	[	'satisfactory', 'Очень неплохо, но нужно потренироваться - ещё много ошибок!'],
	[	'poor', 'Результат печальный, но не расстраивайся! Давай попробуем ещё раз! И с каждым разом будет получаться всё лучше!']
]


const processResults = () => {
	variableItems.forEach(item => {
		const imgs = item.querySelectorAll('.variables__select li img')

		item.classList.add('show')
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
	compareResult();
}

const compareResult = () => {
	if (success == value) score = 'great';
	if (((success / value) < 1) && ((success / value) > 1/2)) score = 'good';
	if (((success / value) <= 1/2) && ((success / value) > 1/5)) score = 'satisfactory';
	if ((success / value) <= 1/5) score = 'poor';
	return score;
}

const getResultMessage = () => {
	let res = '';
	resultMessages.forEach(item => {
		if (item[0] == score) res = item[1]
	})

	return res;
}


export const showResult = () => {

	processResults();

	imgWrapper.classList.add('hide');
	title.classList.add('hide');
	result.classList.remove('hide');

	let msg = getResultMessage();
	const resultTitle = document.createElement('p');
	resultTitle.classList.add('result__title');
	resultTitle.innerHTML = msg;
	content.prepend(resultTitle);

	result.innerHTML = `<p>Верно ${success}</p><p>Неверно ${error}</p>`;
}


