//5.4 Dinamičko dodavanje i brisanje elemenata

const body = document.getElementsByTagName('body');

function f (body){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const h1_t = document.createTextNode('JavaScript');
    const p1_t = document.createTextNode('Super jezik, ali samo ako znamo kako se koristi :)');
    const li1_t = document.createTextNode('Može da se koristi na klijentskoj strani');
    const li2_t = document.createTextNode('Ali i na serverskoj');

    body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(ul);
    h1.appendChild(h1_t);
    p.appendChild(p1_t);
    ul.appendChild(li1);
    ul.appendChild(li2);
    li1.appendChild(li1_t);
    li2.appendChild(li2_t);
}

if (body.length>=0){
    
    const telo = body[0];

    f(telo);
}