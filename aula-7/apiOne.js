function exibir(dados) {
    let pais = dados[0];
    console.log(pais);
}

fetch("https://restcountries.com/v3.1/name/brazil")
.then(response => response.json())
.then(data => exibir(data))