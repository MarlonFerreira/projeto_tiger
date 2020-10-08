// import Ajax from './../util/ajax';

// export default class EntrarLogica {
//     constructor({ tela }) {
//         this.tela = tela;
//     }

//     inicializar() {
//         this.tela.configurarBotaoLogin(this.login.bind(this));
//     }

//     login() {
//         let dados = this.tela.lerLogin();
//         let URL = 'http://localhost:8082/login';
//         // Ajax.post(URL, dados)
//         //             .then( function(result) {
//         //                 console.log(result)
//         //                 document.cookie = `token=${result.token}`
//         //                 event.preventDefault();
//         //                 window.location.href = 'http://localhost:8081/index.html';
//         //                 return result;
//         //             })
//             // .then(logado)
//         // console.log(data)
//         // document.cookie = `token=${data.token}`
//         // event.preventDefault();
//         // window.location.href = 'http://localhost:8081/index.html';
//         // return data;

//         // Ajax.post(URL, dados).then(this.render);

//     }

//     // render(data){
//     //     let result = JSON.stringify(JSON.parse(data), null, 2);
//     //     console.log(result)
//     //     document.cookie = `token=${result.token}`
//     //     event.preventDefault();
//     //     window.location.href = 'http://localhost:8081/index.html';
//     // }


// }