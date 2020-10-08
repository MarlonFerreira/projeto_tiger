import Ajax from './../util/ajax';

function onLoad() {
    let urlPath = window.location.pathname
    if(`${urlPath}` === '/entrar.html'){

        let dependencias = {
            tela: TelaEntrar,
            ajax: Ajax
        };

        const entrarLogica = new EntrarLogica( dependencias );
        entrarLogica.inicializar();
    }
}
window.onload = onLoad



class EntrarLogica {
    constructor({ tela, ajax }) {
        this.tela = tela;
        this.ajax = ajax;
    }

    inicializar() {
        this.tela.configurarBotaoLogin(this.login.bind(this));
    }

    async login() {
        console.log('AFF')
        event.preventDefault ();
        let dados = this.tela.lerLogin();
        let URL = 'http://localhost:8082/login';
        let data = await this.ajax.requisicaoAjaxPostJson(URL, dados);
        console.log(data.token, 'AQUI');
        document.cookie = `token=${data.token}`;
        window.location.href = 'http://localhost:8081/index.html';
    }
}

class TelaEntrar {
    static configurarBotaoLogin(funcaoOnClick) {
        const BTN_ENTRAR = document.getElementById('btnEntrar');
        BTN_ENTRAR.onclick = funcaoOnClick;
    }

    static lerLogin() {
        let login = {
            login: document.getElementById('inputLogin').value,
            senha: document.getElementById('inputPassword').value
        }
        return login;
    }
}





// import TelaEntrar from './entrarTela';
// import EntrarLogica from './entrarLogica';


// function onLoad() {
//     let urlPath = window.location.pathname
//     if(`${urlPath}` === '/entrar.html'){

//         let dependencias = {
//             tela: TelaEntrar
//         };

//         const entrarLogica = new EntrarLogica( dependencias );
//         entrarLogica.inicializar();
//     }
// }
// window.onload = onLoad
