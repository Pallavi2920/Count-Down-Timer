const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("sec");

const halloween = new Date("Oct 31, 2021 00:00:00");
function countdown()
{
    const halloweenDate = new Date(halloween);
    const currentDate = new Date();
    const t = halloweenDate-currentDate;
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    if (t < 0)
    {
            clearInterval(x);
    }

}
countdown();
setInterval(countdown, 1000);
