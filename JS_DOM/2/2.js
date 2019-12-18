//5.3.3 Izmena stila

const paragrafi = document.getElementsByTagName('p');

for (let i = 0; i<paragrafi.length; ++i){
    const paragraf = paragrafi[i];
    if (i % 2 == 0){
        paragraf.className = 'paragraf';
    }
    else{
        paragraf.className = 'neparni';
    }
}