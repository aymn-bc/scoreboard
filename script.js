let t1 = 0
let t2 = 0
let checkEl = document.getElementById("check")
let second = 0
let minute = 0

let interval;

function add1(event) {
    event.preventDefault();
    t1 += 1
    document.getElementById("e1").value = t1
    checkEl.textContent = t1
}
function add2(event) {
    event.preventDefault();
    t2 += 1
    document.getElementById("e2").value = t2
    checkEl.textContent = t2
}

function start() {
    second = parseInt(document.getElementById("s").value)
    minute = parseInt(document.getElementById("m").value)
    if (minute <= 0 && second <= 0) {
        alert("Time is up!")
        clearInterval(interval)
        document.getElementById("m").value = 0;
        document.getElementById("s").value = 0;
    }
    else {
        interval = setInterval(function () {
            if (second === 0 && minute - 1 <= 0) {
                second = 59;
                minute--;
            }
            else if (minute >= 0 && second >= 1 && second < 60) {
                second--;
            }
            else {
                alert("Time is up!");
                clearInterval(interval)
                document.getElementById("m").value = 0;
                document.getElementById("s").value = 0;
            }
            document.getElementById("m").value = minute;
            document.getElementById("s").value = second < 10 ? "0" + second : second;
            console.log(`${minute}m ${second}s`);
        }, 1000);
    }
}
