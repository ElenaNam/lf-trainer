import css from "../style.styl";

import renderImg from './renderImg';
import dragImg from './dragImg';
import result from './result';


/* document.addEventListener('dragover', (e)=> {
	console.log(e.target)
}) */
/* document.addEventListener('click', (e)=> {
	console.log(e.target)
}) */

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../assets/images/', true));
