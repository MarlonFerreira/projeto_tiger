import Ajax from './../util/ajax';

export default function onLoad() {
    let urlPath = window.location.pathname
    if (`${urlPath}` === `/cadastrar.html`) {

        let dependencias = {
            tela: TelaCadastrar,
            ajax: Ajax
        }

        const logicaCadastrar = new LogicaCadastrar(dependencias);
        logicaCadastrar.inicializar();
    }
}
// window.onload = onLoad

class LogicaCadastrar {
    constructor({ tela, ajax }) {
        this.tela = tela
        this.ajax = ajax
    }

    inicializar() {
        this.tela.configurarBotaoCadastrar(this.cadastrar.bind(this))
    }

    async cadastrar() {
        event.preventDefault ();
        let dados = this.tela.lerDados()
        console.log(dados)
        let URL = 'http://localhost:8082/registro';
        let data = await this.ajax.requisicaoAjaxPostJson(URL, dados);
        window.location.href = 'http://localhost:8081/entrar.html';
    }


}

class TelaCadastrar {

    static configurarBotaoCadastrar(funcaoOnClick){
        const BTN_CADASTRAR = document.getElementById('btnCadastrar')
        BTN_CADASTRAR.onclick = funcaoOnClick
    }


    static lerDados() {
        let dados = {
            nome: document.getElementById('inputNome').value,
            email: document.getElementById('inputEmail').value,
            senha: document.getElementById('inputPassword').value
        }
        return dados
    }
}