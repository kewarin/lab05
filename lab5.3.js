function ChangeMode() {
    isVis = !isVis;
    if(isVis) {
        tot.classList.add('tonight');
        t1.textContent = 'GOOD NIGHT';
        t2.textContent = 'This is night time!';
        t3.classList.add('night');
        t4.textContent = 'day';
        t5.textContent = 'day';
    }
    else {
        tot.classList.remove('tonight');
        t1.textContent = 'GOOD MORNING';
        t2.textContent = 'This is day time!';
        t3.classList.remove('night');
        t4.textContent = 'night';
        t5.textContent = 'night';
    }
}

let isVis = false;
const tot = document.querySelector('body');
const t1 = document.querySelector('h1');
const t2 = document.querySelector('h2');
const t3 = document.querySelector('#color');
const t4 = document.querySelector('#night');
const t5 = document.querySelector('.switch');

const TONIGHTs = document.querySelector('.turnNight');
TONIGHTs.addEventListener('click', ChangeMode);
