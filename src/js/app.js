import css from "../style.styl";
import DragDropTouch from './DragDropTouch'
import renderImg from './renderImg';
import dragImg from './dragImg';
import result from './result';
//import popup from './popup';



function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../assets/images/', true));


window.addEventListener('load', ()=> {
	//alert('страница загрузилась')
	//setTimeout((document.body.classList.remove('hide')), 1000)

	document.body.classList.remove('hide')
});
