const botaoMostrapalavra = document.querySelector('#botao-palavrachave')
botaoMostrapalavra. addEventListener('click', mostrapalavrachave);

function mostrapalavrachave(){
    const texto = document.querySelector('#entrada-de-texto').ariaValueMax;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split(" ");

    campoResultado.textContent = palavras.join(",");
    
}