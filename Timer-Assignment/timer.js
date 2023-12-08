
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');

var interval = null;
var total = 0;
var isPaused = false;

function totalValue() {
    total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
}

function timerFunc() {
    totalValue();
    if (!isPaused) {
        total--;

        if (total >= 0) {
            var hr = Math.floor(total / 3600);
            var min = Math.floor((total / 60) - (hr * 60));
            var sec = total - ((hr * 3600) + (min * 60));

            hour.value = hr;
            minute.value = min;
            second.value = sec;
        } else {
            clearInterval(interval);
            document.getElementById('disp').innerText = "Time Over";
        }
    }
}

start.addEventListener('click', () => {
    clearInterval(interval);
    isPaused = false;
    interval = setInterval(timerFunc, 1000);
});

pause.addEventListener('click', () => {
    isPaused = true;
});

reset.addEventListener('click', () => {
    clearInterval(interval);

    hour.value = 0;
    minute.value = 0;
    second.value = 0;
    isPaused = false;
    document.getElementById('disp').innerText = "Timer";
});


