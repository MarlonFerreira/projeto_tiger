export default function onLoad(Ajax, EntrarLogica, TelaEntrar) {

    let dependencias = {
        tela: TelaEntrar,
        ajax: Ajax
    };

    const entrarLogica = new EntrarLogica(dependencias);
    entrarLogica.inicializar();
}