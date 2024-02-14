const config = {
    method: "GET", // não é obrigatório passar quando é GET
    headers: {
        'Content-Type': 'application/json', // Tipo de conteúdo da requisição
        'Authorization': 'Bearer TOKEN_ACESSO' // exemplo de cabeçalho com autenticação
    }
}
fetch("https://jsonplaceholder.typicode.com/posts", config)
.then(response => response.json())
.then(data => console.log(data))

//https://restcountries.com/v3.1/name/brazil