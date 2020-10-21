export default class Ajax {

    static requisicaoAjaxPostJson(URL, dados) {
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