
export default class IndexLogica {
    constructor({ tela, Vue, utilCookies }) {
        this.tela = tela;
        this.Vue = Vue;
        this.utilCookies = utilCookies;
    }

    inicializar() {
        this.boasVindas();
    }

    async boasVindas() {
        let nome = this.utilCookies.getCookie('name')
        this.tela.exibirBemVindo(this.Vue, nome)
    }
}
