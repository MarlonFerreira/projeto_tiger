export default class TelaEntrar {
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