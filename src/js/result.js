import { imgWrapper } from "./renderImg";

const content = document.querySelector('.main__inner');
const title = content.querySelector('.main__title h2');

export const showResult = () => {
	content.classList.add('result');
	title.textContent = "Результат";

	imgWrapper.innerHTML = `<h3>Верно </h3><h3>Неверно </h3>`
}


