export default function onLoad(Ajax, LogicaCadastrar, TelaCadastrar) {
    let dependencias = {
        tela: TelaCadastrar,
        ajax: Ajax
    }

    const logicaCadastrar = new LogicaCadastrar(dependencias);
    logicaCadastrar.inicializar();
}