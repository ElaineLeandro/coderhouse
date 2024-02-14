// Função para buscar dados do país escolhido 
function buscarDadosNoruega() {

    const endpoint = 'https://restcountries.com/v3.1/name/norway';


    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
       
        const bandeiraURL = data[0].flags.svg;

      
        const imgElement = document.createElement('img');

      
        imgElement.src = bandeiraURL;

    
        imgElement.classList.add('bandeira-imagem');

        const container = document.getElementById('bandeira-container');
        container.appendChild(imgElement);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }

  buscarDadosNoruega();