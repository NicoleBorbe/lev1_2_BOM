let counter = document.querySelector(".zeit");
let count = 100;

function start() {
    let interval = setInterval(start, 100);
    if (count >= 1) {
    count -= 1;
    counter.innerHTML = `${count}%`;
    } else  {
        clearInterval(interval);
    }
};

