//Brisanje elemenata

const liste = document.getElementsByTagName('ul');

function f(x){
    if (x.className.indexOf('obrisi_mene')!= -1){
        return true;
    }
    else{
        return false;
    }
}

if(liste.length >=0){

    const lista = liste[0];
    const stavke = lista.children;
    const br_stavki = stavke.length;

    for (let i = br_stavki-1; i>=0; --i){

        if(f(stavke[i])){
            lista.removeChild(stavke[i]);
        }
    }
}