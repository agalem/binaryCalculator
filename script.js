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
let operator;


const getFirstNumber = () => {
    firstNumber = input.innerHTML;
};

const getSecondNumber = () => {
    if (input.innerHTML.indexOf('+') > -1) {
        secondNumber = input.innerHTML.slice((input.innerHTML.indexOf('+')+1), input.innerHTML.length);
        operator  = '+';
    } else if (input.innerHTML.indexOf('-') > -1) {
        secondNumber = input.innerHTML.slice((input.innerHTML.indexOf('-')+1), input.innerHTML.length);
        operator = '-';
    } else if (input.innerHTML.indexOf('*') > -1) {
        secondNumber = input.innerHTML.slice((input.innerHTML.indexOf('*')+1), input.innerHTML.length);
        operator = '*';
    } else if (input.innerHTML.indexOf('/') > -1) {
        secondNumber = input.innerHTML.slice((input.innerHTML.indexOf('/')+1), input.innerHTML.length);
        operator = '/';
    } else {
        console.log('No operator');
    }
};

const countSum = () =>  {
    let output = Number(parseInt(firstNumber, 2)) + Number(parseInt(secondNumber,2));
    input.innerHTML = output.toString(2);
};

const countSub =() => {
    let output = Number(parseInt(firstNumber, 2)) - Number(parseInt(secondNumber,2));
    input.innerHTML = output.toString(2);
};

const countMul = () => {
    let output = Number(parseInt(firstNumber, 2)) * Number(parseInt(secondNumber,2));
    input.innerHTML = output.toString(2);
};

const countDiv = () => {
    let output = Math.floor(Number(parseInt(firstNumber, 2)) / Number(parseInt(secondNumber,2)));
    input.innerHTML = output.toString(2);
};


const disableBtns = () => {
    const btns = document.getElementsByClassName('btn-count');
    for(let i=0; i< btns.length; i++){
        btns[i].style.backgroundColor = 'darkgrey';
        btns[i].disabled = true;
    }
};


const enableBtns = () => {
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

for(let i=0; i<document.getElementsByClassName('btn-count').length; i++){
    document.getElementsByClassName('btn-count')[i].addEventListener('click', function () {
        getFirstNumber();
        displayChanges(this);
        disableBtns();
    })
}

sum.addEventListener('click', function () {
    getFirstNumber();
    displayChanges(this);
});


clear.addEventListener('click', function () {
    clearInput();
});

equal.addEventListener('click', function () {
    getSecondNumber();
    if(operator === '+'){
        countSum();
    } else if (operator === '-'){
        countSub();
    } else if (operator === '*'){
        countMul();
    } else if (operator === '/'){
        countDiv();
    }
    enableBtns();
});
