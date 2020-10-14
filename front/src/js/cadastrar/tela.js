export default class TelaCadastrar {

    static configurarBotaoCadastrar(funcaoOnClick) {
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