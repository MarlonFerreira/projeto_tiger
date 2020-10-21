// BOOTSTRAP E VUEJS
import 'bootstrap/dist/js/bootstrap.min.js';
// import Vue from 'vue/dist/vue.min.js'; // PRODUCAO
import Vue from 'vue/dist/vue';           // DEV

// FOLHA DE ESTILOS
import '../css/styles.scss';

// ROTAS E RESPECTIVOS SCRIPTS
import index from './index/index'
import indexLogica from './index/logica'
import indexTela from './index/tela'

import entrar from './entrar/entrar';
import entrarLogica from './entrar/logica';
import entrarTela from './entrar/tela';

import cadastrar from './cadastrar/cadastrar';
import cadastrarLogica from './cadastrar/logica'
import cadastrarTela from './cadastrar/tela'

// SCRIPTS DE UTILIDADE GERAL
import ajax from './util/ajax';
import UtilCookies from './util/utilCookies'

// IMAGENS
import imgLogo from '../images/tigre.svg';
import imgPrato1 from '../images/prato1.jpg';
import imgPrato2 from '../images/prato2.jpeg';
import imgPrato3 from '../images/prato3.jpg';

import iconLupa from '../images/search.svg';
import iconPorta from '../images/door-open.svg';
import iconCoracao from '../images/heart.svg';
import iconCarrinho from '../images/cart3.svg';

// ROTAS 
function onLoad() {
    let urlPath = window.location.pathname
    if (`${urlPath}` === `/index.html`) {
        index(Vue, indexLogica, indexTela, UtilCookies)
    }
    if (`${urlPath}` === `/entrar.html`) {
        entrar(ajax, entrarLogica, entrarTela)
    }
    if (`${urlPath}` === `/cadastrar.html`) {
        cadastrar(ajax, cadastrarLogica, cadastrarTela)
    }
}
window.onload = onLoad