/**
 * Descrição;
    Cria um script em javascript que solicite ao usuário que insira no mínimo um dado tipo de texto ou outro tipo numérico
    Em seguida, com  Javascript , realize operação matemática ou de concatenação sobre as entredas, considerando um tipo de dado.
    Ao finalizar, mostre os resultados por meio de alert() ou console.log()

   Exemplos 
      Solicitar o nome pelo prompt e mostrá-lo em console junto a algum texto de saudação.
      Solicitar um número pelo prompt, parseá-lo, somá-lo a outro que esteja armazenado em uma variável e, por fim, mostrar o resultado por console
      Solicitar um texto pelo prompt , depois outro, concatená-los e mostra o resultado através de alert
 */

   function executarOperacao() {
         var nome = prompt("Por favor, insira seu nome:");
       
         console.log("Olá, " + nome + "! Bem-vindo(a) ao exemplo de algoritmo JavaScript.");
       
         var numeroString = prompt("Agora, por favor, insira um número:");
               
         var numero = parseFloat(numeroString);
       
         var numeroArmazenado = 10;
         var resultado = numero + numeroArmazenado;
       
         console.log("O resultado da soma é: " + resultado);
       
         var texto1 = prompt("Por favor, uma comida preferida:");
       
         var texto2 = prompt("Agora, por favor, viagem:");
       
         var textoConcatenado = texto1 + " " + texto2;
       
         alert("O texto concatenado é: " + textoConcatenado);
      }
       
