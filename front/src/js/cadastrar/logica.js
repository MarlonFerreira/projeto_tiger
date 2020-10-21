export default class LogicaCadastrar {
    constructor({ tela, ajax }) {
        this.tela = tela
        this.ajax = ajax
    }

    inicializar() {
        this.tela.configurarBotaoCadastrar(this.cadastrar.bind(this))
    }

    async cadastrar() {
        event.preventDefault();
        let dados = this.tela.lerDados()
        let URL = 'http://localhost:8082/registro';
        let data = await this.ajax.requisicaoAjaxPostJson(URL, dados);
        window.location.href = 'http://localhost:8081/entrar.html';
    }
}