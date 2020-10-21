export default class TelaIndex {
    static exibirBemVindo(Vue, nome) {
        new Vue({
            el: '#main',
            data: {
                message: `Bem vindo ${nome}`
            }
        })
    }

}