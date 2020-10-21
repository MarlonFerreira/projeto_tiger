export default function onLoad(Vue, IndexLogica, IndexTela, UtilCookies) {

    let dependencias = {
        Vue: Vue,
        tela: IndexTela,
        utilCookies: UtilCookies
    }

    const indexLogica = new IndexLogica(dependencias)
    indexLogica.inicializar()
}