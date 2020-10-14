export default function onLoad(Ajax, LogicaCadastrar, TelaCadastrar) {
    console.log(Ajax)
    let dependencias = {
        tela: TelaCadastrar,
        ajax: Ajax
    }

    const logicaCadastrar = new LogicaCadastrar(dependencias);
    logicaCadastrar.inicializar();
}