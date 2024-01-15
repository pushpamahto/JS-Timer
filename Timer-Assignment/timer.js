
const hour_Input = document.getElementById('hour');
const minute_Input = document.getElementById('minute');
const second_Input = document.getElementById('second');

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

let interval = null;
let totalSeconds = 0;

const totalValue = () => {
    totalSeconds = Number(hour_Input.value) * 3600 + Number(minute_Input.value) * 60 + Number(second_Input.value);
}

const timerFunc = () => {
    if (totalSeconds > 0) {
        totalSeconds--;

        const hr = Math.floor(totalSeconds / 3600);
        const min = Math.floor((totalSeconds / 60) - (hr * 60));
        const sec = totalSeconds - ((hr * 3600) + (min * 60));

        hour_Input.value = hr;
        minute_Input.value = min;
        second_Input.value = sec;
    } else {
        clearInterval(interval);
        document.getElementById('disp').innerText = "Time Over";
    }
}

startButton.addEventListener('click', () => {
    clearInterval(interval);
    totalValue();
    interval = setInterval(timerFunc, 1000);
});

pauseButton.addEventListener('click', () => {
    clearInterval(interval); 
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    hour_Input.value = 0;
    minute_Input.value = 0;
    second_Input.value = 0;
    totalSeconds = 0;
    document.getElementById('disp').innerText = "Timer";
});
