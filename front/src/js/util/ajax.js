export default class Ajax {
    static post(url, data) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            req.open('POST', url);
            // 서버로 전송하는 데이터의 mime type 설정
            req.setRequestHeader('Content-type', 'application/json');
            req.send(JSON.stringify(data));
            // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            // // escaping untrusted data
            // req.send(Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&'));

            req.onreadystatechange = function () {
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) resolve(req.response);
                    else reject(req.statusText);
                }
            };
        });
    }







    static requisicaoAjaxPostJson(URL, dados, DESTINO) {
        console.log('Entrou REQUISICAO')
        return fetch(URL, {
            mode:'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify( dados )
        })
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                        .then(function (data) {
                            return data
                        })
                }
                else {
                    console.log('Erro na conexao')
                    return 0
                }
            }, function (reject) {
                console.log(reject)
                return 0
            })
            .catch(function (error) {
                console.log('Erro na operacao ' + error.message)
                return 0
            })
    }



}



// class Util {
//     static requisicaoAjaxPostJson(URL, dados) {
//         return fetch(URL, {
//             mode:'cors',
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json",
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify( dados )
//         })
//             .then(function (response) {
//                 if (response.ok) {
//                     return response.json()
//                         .then(function (data) {
//                             document.cookie = `token=${data.token}`;
//                             window.location.href = "index.html";
//                         })
//                 }
//                 else {
//                     console.log('Erro na conexao')
//                     return 0
//                 }
//             }, function (reject) {
//                 console.log(reject)
//                 return 0
//             })
//             .catch(function (error) {
//                 console.log('Erro na operacao ' + error.message)
//                 return 0
//             })
//     }
// }



// function requisicaoAjaxPostJson(URL, dados) {
//     return fetch(URL, {
//         method: 'POST',
//         headers: {
//             "Content-Type": "application/json",
//             'Accept': 'application/json'
//         },
//         body: dados
//         // body: JSON.stringify( dados )
//     })
//         .then(function (response) {
//             if (response.ok) {
//                 return response.json()
//                     .then(function (data) {
//                         console.log(data)
//                         token_acess = data
//                         document.cookie = `token=${data.token}`;
//                         window.location.href = "./index";
//                     })
//             }
//             else {
//                 console.log('Erro na conexao')
//                 return 0
//             }
//         }, function (reject) {
//             console.log(reject)
//             return 0
//         })
//         .catch(function (error) {
//             console.log('Erro na operacao' + error.message)
//             return 0
//         })
// }