const input = document.getElementById('res');

const zero = document.getElementById('btn0');
const one = document.getElementById('btn1');
const clear = document.getElementById('btnClr');
const equal = document.getElementById('btnEql');
const sum = document.getElementById('btnSum');
const sub = document.getElementById('btnSub');
const mul = document.getElementById('btnMul');
const div = document.getElementById('btnDiv');

let firstNumber;
let secondNumber;


const getFirstNumber = () => {
    firstNumber = input.innerHTML;
    console.log(firstNumber);
};

const getSecondNumber = () => {
    if (input.innerHTML.indexOf('+') > -1) {
        secondNumber = input.innerHTML.slice((input.innerHTML.indexOf('+')+1), input.innerHTML.length);
        console.log(secondNumber);
    } else if (input.innerHTML.indexOf('-') > -1) {
        secondNumber = input.innerHTML.slice((input.innerHTML.indexOf('-')+1), input.innerHTML.length);
        console.log(secondNumber);
    } else if (input.innerHTML.indexOf('*') > -1) {
        secondNumber = input.innerHTML.slice((input.innerHTML.indexOf('*')+1), input.innerHTML.length);
        console.log(secondNumber);
    } else if (input.innerHTML.indexOf('/') > -1) {
        secondNumber = input.innerHTML.slice((input.innerHTML.indexOf('/')+1), input.innerHTML.length);
        console.log(secondNumber);
    } else {
        console.log('No operator');
    }
};

/*const countOutput = () =>  {

}*/

const disableBtns = () => {
    const btns = document.getElementsByClassName('btn-count');
    for(let i=0; i< btns.length; i++){
        btns[i].style.backgroundColor = 'darkgrey';
        btns[i].disabled = true;
    }
};


const enableBtn = (btn) => {
    const btns = document.getElementsByClassName('btn-count');
    for(let i=0; i< btns.length; i++){
        btns[i].style.backgroundColor = 'black';
        btns[i].disabled = false;
    }
};

const displayChanges = (elem) => {
    input.innerHTML += elem.innerHTML;
};

const clearInput = () => {
    input.innerHTML = '';
};

zero.addEventListener('click', function () {
    displayChanges(this);
});

one.addEventListener('click', function () {
    displayChanges(this);
});

sum.addEventListener('click', function () {
    getFirstNumber();
    displayChanges(this);
});

sub.addEventListener('click', function () {
    getFirstNumber();
    displayChanges(this);
});

mul.addEventListener('click', function () {
    getFirstNumber();
    displayChanges(this);
});

div.addEventListener('click', function () {
    getFirstNumber();
    displayChanges(this);
});

clear.addEventListener('click', function () {
    clearInput();
});

equal.addEventListener('click', function () {
    getSecondNumber();
});
