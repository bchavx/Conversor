//DECLARAÇÃO DAS VARIÁVEIS
let temperatura = 0;
let escala;
let resultado;


function converter(){

// entrada da temperatura seleionada 
temperatura = parseInt(document.querySelector('#txttemperatura').value);

console.log(temperatura);

// entrada da escala seleionada 
escala = document.querySelector('#slcEscala').value;

// verifica se é celsius
    if (escala == 'Celsius') {
        
        //calculo de conversão
        resultado = (temperatura - 32) / 1.8
        
        //exinibição da temperatura convertida
        document.querySelector('#resultado').innerHTML = resultado;
}

// verifica se é fahrenheit

if (escala == 'Fahrenheit') {

        //calculo de conversão 
    resultado = (temperatura * 1.8 + 32)

//exinibição da temperatura convertida
    document.querySelector('#resultado').innerHTML = resultado;
}

}