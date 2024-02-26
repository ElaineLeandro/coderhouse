// limpar campor de entrada
const clearFields = ()=> {
    document.getElementById('weight').value = ''
    document.getElementById('height').value = ''
}

// Função para limpar o resultado
const clearResult = () =>{
    document.getElementById('result').innerHTML = ''
    clearFields()
 }


// Função para calcular o IMC com base no peso e altura fornecidos
const  calculateIMCFromWeightHeight = (weight, height) =>{
    const imc = weight / (height * height);
    return imc.toFixed(2)
}

//Função exibeir resultado
const  displayResult = (imc) => {

    clearResult();
    
    let resultado = "";
    if( imc < 18.5){
      resultado = ' Abaixo do peso'
    }else if( imc >= 18.5 && imc < 25){
      resultado = ' Peso normal'
    }else if( imc >= 25 && imc < 30){
      resultado = 'Deu ruim Sobrepeso gritando...'
    }else{
      resultado = 'Obsidade Morbida'
    }
  
    document.getElementById('result').innerHTML = `Seu resultado é: ${imc}, classificado como: ${resultado}`
      
}

//Função para calcular o IMC
const calculateIMC = ( ) =>{
    const weight = parseFloat(document.getElementById('weight').value)
    const height = parseFloat(document.getElementById('height').value)

    // calcular IMC
    const imc = calculateIMCFromWeightHeight(weight, height)

    //Exibir o resultado

    displayResult(imc, weight, height)

}

