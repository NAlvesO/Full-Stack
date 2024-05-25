function buscaCep() {
    const cep = document.getElementById("cep").value.trim()

    if (!cep) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cep informado está inválido",
        })
        return
    }

    document.getElementById("resultado").innerHTML = "CARREGANDO ..."
    fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(function (response) {
            return response.json()
        })
        .then(function(endereco) {
            document.getElementById("resultado").innerHTML = 
                `O nome da rua é ${endereco.logradouro} no bairro ${endereco.bairro} na cidade de ${endereco.localidade} do estado do ${endereco.uf}.`
        })
}

document.getElementById('btn-busca-cep').addEventListener('click', buscaCep)