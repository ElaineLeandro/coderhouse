async function buscarCEP(cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        console.log('CEP não encontrado');
      } else {
        console.log('Informações do CEP:');
        console.log(`CEP: ${data.cep}`);
        console.log(`Logradouro: ${data.logradouro}`);
        console.log(`Complemento: ${data.complemento}`);
        console.log(`Bairro: ${data.bairro}`);
        console.log(`Cidade: ${data.localidade}`);
        console.log(`Estado: ${data.uf}`);
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
    }
  }

  // Exemplo de uso:
  const meuCEP = '06070211'; 
  buscarCEP(meuCEP);

