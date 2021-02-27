function x1(){
    var a=alert("Don't click me said : Don't click me")
    document.getElementById('A').style.backgroundColor = 'black';
    document.getElementById('A').style.color = 'white';
}

function x2(){
    var b=alert("Don't click me said : hey!!! don't click me")
    document.getElementById('B').style.backgroundColor = 'black';
    document.getElementById('B').style.color = 'white';
}

function x3(){
    var c=alert("Don't click me said : why always click me!!!!!!!")
    document.getElementById('C').style.backgroundColor = 'black';
    document.getElementById('C').style.color = 'white';
}

function x4(){
    var d=alert("Don't click me said : Stop!!!!! go out!!!!")
    document.getElementById('D').style.backgroundColor = 'black';
    document.getElementById('D').style.color = 'white';
}

function move(){
    const hh1 = document.querySelector('#one');
    const hh2 = document.querySelector('#two');
   
    hh1.textContent = 'Hi!!!!!!!';
    hh2.textContent = 'Hi!!!!!!!';
}

const head = document.querySelector('.change');
head.addEventListener('click', move);