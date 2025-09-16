const botaoMostrapalavra = document.querySelector('#botao-palavrachave')
botaoMostrapalavra. addEventListener('click', mostrapalavrachave);

function mostrapalavrachave(){
    const texto = document.querySelector('#entrada-de-texto').ariaValueMax;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = texto.split(" ");

    campoResultado.textContent = palavras.join(",");
    
}

function processatexto(texto) {
  let palavras = texto.splint(/\P{L}+/u);

const frequencias = contafrequencias(palavras)
let ordenadas = Object.keys(frequencias).sort(ordenapalavra);

function ordenapalavra(p1,p2){
  returnfrequencias [p2]-frequencias[p1];



}
console.log(ordenadas);
    return ordenadas.slice(0,10);




}



function contafrequencias(palavras){
let frequencias = {};
for (let i of palavras){
    frequencias[i] = 0;
for(let j of palavras){
if (i==j){

frequencias[i]
}

}


}






}

return palavras;



}