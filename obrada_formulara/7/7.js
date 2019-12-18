//5.6 Obrada podataka u formularu

const f = document.querySelector('#formular');
const s = document.getElementById('password');

function prebroj_c (x){
    let cnt = 0;

    for (let i = 0; i<x.length; ++i){
        const tekuci_k = x.charAt(i);
        if('0123456789'.indexOf(tekuci_k) != -1){
            ++cnt;
        }
    }
    return cnt;
}

f.addEventListener('submit',function(ev){
    let polje;
    const greska = document.querySelector('#greska');
    polje = document.querySelector('#ime_prezime');
    const ime_i_prezime = polje.nodeValue.trim();
    const max_duzina = polje.maxLength || 30;

    if (ime_i_prezime.length > max_duzina || ime_i_prezime === ''){
        greska.textContent('Greska!!!!!!');
        polje.focus();
        ev.preventDefault();
        return false;
    }

    polje = document.querySelector('#datum_rodjenja');
    const datum_rodjenja = polje.value;
    let g = parseInt(datum_rodjenja.substr(0,4));
    let m = parseInt(datum_rodjenja.substr(5,2));    
    let d = parseInt(datum_rodjenja.substr(8,2));
    if(g < 1900 || g>2019 || m>=12 || m<=0 || d>=31 || d<=0 || isNaN(g), isNaN(m), isNaN(d)){
        greska.textContent('Greska!!!!!!!!!!!');
        polje.focus();
        ev.preventDefault();
        return false;
    }

    polje = document.querySelector('#email');
    const mail = polje.value;


    if(mail.indexOf('@') == -1){
        greska.textContent('Greska!!!!!!!!!!!');
        polje.focus();
        ev.preventDefault();
        return false; 
    }
    

    polje = document.querySelector('#veb_adresa');
    const veb = polje.value;
    if(veb.substr(0,7)!= 'http://'){
        greska.textContent('Greska!!!!!!!!!!!');
        polje.focus();
        ev.preventDefault();
        return false; 
    }

    polje = document.querySelector('#username');
    const korisnickoIme = polje.value.trim();
    if (korisnickoIme.length < 5) {
        greska.textContent = 'Korisnicko ime nije dovoljno dugo.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    const malaSlova = [];
    const velikaSlova = [];
    for (let i = 0; i < 26; ++i) {
        malaSlova[i] = String.fromCharCode(97 + i);
        velikaSlova[i] = String.fromCharCode(65 + i);
    }

    for (let i = 0; i < korisnickoIme.length; ++i) {
        const tekuciKarakter = korisnickoIme.charAt(i);

        if (malaSlova.indexOf(tekuciKarakter) === -1 && 
            velikaSlova.indexOf(tekuciKarakter) === -1) {
            greska.textContent = 'Nedozvoljeni karakter u polju za korisnicko ime.';
            polje.focus();
            ev.preventDefault();
            return false;
        }
    }

    polje = document.querySelector('#password');
    const sifra = polje.value.trim();

    if (sifra === '') {
        greska.textContent = 'Polje za sifru je obavezno.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    const br_c = prebroj_c(sifra);
    if(br_c < 3){
        greska.textContent = 'Polje za sifru mora da sadrzi barem dve cifre.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    polje = document.querySelector('#fakultet');

    if (polje.selectedIndex === 0) {
        greska.textContent = 'Odaberite fakultet.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    let indikatorGodine = false;
    polje = document.querySelectorAll('input[name="godina"]');

    for (let i = 0; i < polje.length; ++i) {
        let godina = polje[i];

        if (godina.checked) {
            indikatorGodine = true;
            break;
        }
    }

    if (!indikatorGodine) {
        greska.textContent = 'Godina studija je obavezno polje.';
        polje.focus();
        ev.preventDefault();
        return false;
    }

    return true;

})

f.addEventListener('reset', function(ev) {
    const treba_resetovati = window.confirm('Da li zelite da ponistite unos?');

    if (!treba_resetovati) {
        ev.preventDefault();
        return false;
    }
    return true;
});


s.addEventListener('focus', function() {
    const brojCifara = prebroj_c(this.value.trim());    
    // Ukoliko šifra ne ispunjava uslove, prikazujemo poruku. 
    if (prebroj_c < 2) {
       upozorenje.style.display = 'block';
    }
});

s.addEventListener('blur', function() {
    // Kada element izgubi fokus, sakrivamo poruku.
    upozorenje.style.display = 'none';
});

s.addEventListener('change', function() {
    const brojCifara = prebroj_c(this.value.trim());
    // Ukoliko šifra ne ispunjava uslove, 
    // prikazujemo poruku u obaveštajnom prozoru. 
    // Poruka se prikazuje nakon što element izgubi fokus, 
    // ukoliko je vrednost polja izmenjena.
    if (brojCifara < 2) {
        window.alert('Šifra mora da sadrži bar dve cifre!');
    }
});

s.addEventListener('input', function() {
    const upozorenje = document.getElementById('upozorenje');
    const sifra = this.value.trim();
    const brojCifara = prebroj_c(sifra);
    
    // Ukoliko šifra ne ispunjava uslove, prikazujemo poruku.
    if (brojCifara < 2) {
        upozorenje.style.display = 'block';
    }
    // Ukoliko je uslov ispunjen, sakrivamo poruku.
    else {
        upozorenje.style.display = 'none';
    }
});