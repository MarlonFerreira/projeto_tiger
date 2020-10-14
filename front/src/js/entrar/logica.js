export default class EntrarLogica {
    constructor({ tela, ajax }) {
        this.tela = tela;
        this.ajax = ajax;
    }

    inicializar() {
        this.tela.configurarBotaoLogin(this.login.bind(this));
    }

    async login() {
        event.preventDefault();
        let dados = this.tela.lerLogin();
        let URL = 'http://localhost:8082/login';
        let data = await this.ajax.requisicaoAjaxPostJson(URL, dados);
        document.cookie = `token=${data.token}`;
        window.location.href = 'http://localhost:8081/index.html';
    }
}