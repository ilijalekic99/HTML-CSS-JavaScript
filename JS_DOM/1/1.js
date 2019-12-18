// 5.3.2 Izmena vrednosti atributa

const veze = document.getElementsByTagName('a');

if (veze.length >= 0){
    const veza = veze[0];


veza.href = 'www.youtube.com';
veza.target = '_blank';

veza.innerHTML = 'Youtube link';
}