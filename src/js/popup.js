const overlay = document.getElementById('overlay');
const modal = document.querySelector('.popup');
const close = document.getElementById('close');
const taskLink = document.getElementById('taskLink');
const body = document.body;

const changeModal = () => {
	modal.classList.toggle('show');
	overlay.classList.toggle('hide');
	body.classList.toggle('modal-open');
}

overlay.addEventListener('click', ()=> {
	changeModal();
})
//TODO:
close.addEventListener('click', ()=> {
	changeModal();
})

taskLink.addEventListener('click', () => {
	changeModal();
})
