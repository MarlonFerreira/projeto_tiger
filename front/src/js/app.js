import 'bootstrap';
import 'vue';

import entrar from './entrar/entrar';
import cadastrar from './cadastrar/cadastrar';

import '../css/styles.scss';

import imgLogo from '../images/tigre.svg';
import imgPrato1 from '../images/prato1.jpg';
import imgPrato2 from '../images/prato2.jpeg';
import imgPrato3 from '../images/prato3.jpg';

import iconLupa from '../images/search.svg';
import iconPorta from '../images/door-open.svg';
import iconCoracao from '../images/heart.svg';
import iconCarrinho from '../images/cart3.svg';

function onLoad() {
    let urlPath = window.location.pathname
    if (`${urlPath}` === `/entrar.html`) {
        entrar()
    }
    if (`${urlPath}` === `/cadastrar.html`) {
        cadastrar()
    }
}
window.onload = onLoad