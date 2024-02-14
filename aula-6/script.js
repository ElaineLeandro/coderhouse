
 var elementoPorId = document.getElementById('meuElemento');
 elementoPorId.innerHTML += "<p>Texto adicionado com innerHTML</p>";
 console.log("Elemento por ID:", elementoPorId);

 var elementosPorClasse = document.getElementsByClassName('minhaClasse');
 elementosPorClasse[0].innerHTML += "<p>Texto adicionado com innerHTML</p>";
 console.log("Todos os elementos por classe:", elementosPorClasse);

 
 console.log("Somente o primeiro elemento por classe:", elementosPorClasse[0]);


 var radioElemento1 = elementoPorId.querySelector('input[type="radio"]');
 var radioElemento2 = elementosPorClasse[1].querySelector('input[type="radio"]');

 console.log("Radio do primeiro elemento:", radioElemento1);
 console.log("Radio do segundo elemento:", radioElemento2);
