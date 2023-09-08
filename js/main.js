const minutesBlock = document.querySelector('.js-minutes'),
    secondsBlock = document.querySelector('.js-seconds'),
    hundredthSecondsBlock = document.querySelector('.js-hundredths-seconds'),
    BtnStart = document.querySelector('.js-btn-start'),
    BtnStop = document.querySelector('.js-btn-stop'),
    BtnReset = document.querySelector('.js-btn-reset');

let interval;
let minutes = 0;
let seconds = 0;    
let miliseconds = 0;

const startTimer = () => {
    miliseconds++;
    // miliseconds += 1000;
    
    hundredthSecondsBlock.innerHTML = miliseconds;
    if (miliseconds <=99){
        hundredthSecondsBlock.innerHTML = miliseconds;
    }
    if (miliseconds == 100){
        hundredthSecondsBlock.innerHTML = '00';
    }
    
    if (miliseconds > 99)  {
        seconds++;
        secondsBlock.innerHTML = '0' + seconds;
        miliseconds = 0;
    }
    
    if (seconds > 9) {
        secondsBlock.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        minutesBlock.innerHTML = '0' + minutes;
        seconds = 0;
        secondsBlock.innerHTML = '0' + seconds;
    }   
    if (minutes > 9) {
        minutesBlock.innerHTML = minutes;
    }
};

BtnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});
BtnStop.addEventListener('click', () => {
    clearInterval(interval);
});
BtnReset.addEventListener('click', () => {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;    
    miliseconds = 0;

    minutesBlock.innerHTML = '00';
    secondsBlock.innerHTML = '00';
    hundredthSecondsBlock.innerHTML = '00';
});

