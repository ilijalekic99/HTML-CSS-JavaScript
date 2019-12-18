//5.5 Pridruživanje osluškivača događaja elementima

let velicina = 100;
const korak = 50;

const kvadrat = document.getElementById('kvadrat');

function povecaj (){
    velicina= velicina+korak;
    kvadrat.style.width = velicina + 'px';
    kvadrat.style.height = velicina + 'px';
}

function smanji (){
    if((velicina - korak) < 0){
        return;
    }
    velicina-=korak;
    kvadrat.style.width = velicina + 'px';
    kvadrat.style.height = velicina + 'px';
}

const d1 = document.getElementById('uvecaj');
const d2 = document.getElementById('smanji');

d1.addEventListener('click',povecaj);
d2.addEventListener('click',smanji);
