//Zamena postojećeg elementa drugim elementom

const galerija = document.getElementById('galerija_slika');

const elementi = galerija.children;

for (const elem of elementi){
    if(elem.tagName.toLowerCase() === 'span'){
        const slika = document.createElement('img');
        slika.src = 'portret.jpg';
        slika.alt = 'jebiga';
        slika.width = 100;
        galerija.replaceChild(slika,elem);
    }
}