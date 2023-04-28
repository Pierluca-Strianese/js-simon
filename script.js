const eleDays = document.querySelector ('.days');
const eleHours = document.querySelector ('.hours');
const eleMinutes = document.querySelector ('.minutes');
const eleSeconds = document.querySelector ('.seconds');

const endCounter = new Date('2023-04-30T09:30:00').getTime();

const idInterval = setInterval(count,1000);

count();


function count() {
    const now = new Date().getTime;
    const delta = endCounter - now;
    const dateDelta = new Date(delta);

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (delta <= 0) {
        clearInterval(idInterval);
    }
    else {
        seconds = dateDelta.getSeconds();

        minutes = dateDelta.getMinutes();

        hours = dateDelta.getHours();

        days = dateDelta.getDate() - 1;
    }

    eleDays.innerHTML = days;
    eleHours.innerHTML = hours;
    eleMinutes.innerHTML = minutes;
    eleSeconds.innerHTML = seconds;

}