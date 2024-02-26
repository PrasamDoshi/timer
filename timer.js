let beat=new Audio('beats.mp3');
const press = document.querySelector(".start_stop");
const button = document.querySelector("section");
const togglepress = () => {
    button.classList.toggle("active");
};
press.addEventListener('click', () => togglepress());


const play = document.querySelector(".pause_play");
const play_pause = document.querySelector("div");
const toggleplay = () => {
    play_pause.classList.toggle("action");
};
play.addEventListener('click', () => toggleplay());


const hand = document.querySelector('.secondhand');
var count = 1, i = 0, srotation, temp = 0;


// start section 
document.querySelector('#start').onclick = function main() {
    temp = i = 0;
    const time = document.querySelector('#time').value;
    console.log(time);
    if (time > 60 || time == "") {
        alert("Please enter time in range 0 to 60 seconds");
        document.querySelector('#time').value = '';
        button.classList.add("active");
        clearInterval(ticktick_1);
    }
    else {
        if (count == 1) {
            srotation = time * 6; console.log(srotation);
            count = 0;
            hand.style.transform = `rotate(${srotation}deg)`;
        }
    }
    function timer1() {
        if (time <= 60 && srotation > 0) {
            beat.play();
            srotation -= 6;
            console.log(srotation);
            hand.style.transform = `rotate(${srotation}deg)`;
            if(srotation==0){
                document.querySelector('#time').value = '';
                count = 1;
                hand.style.transform = `rotate(0deg)`;
                srotation = 0;
                play_pause.classList.remove("action");
                button.classList.remove("active");
                i = temp = 0;
                clearInterval(ticktick_1);
                beat.pause();
            }
        }
    }
    ticktick_1 = setInterval(timer1, 1000);
}



// pause section
document.querySelector('#pause').onclick = function () {
    if (i == 0) {
        temp = srotation;
        srotation = 0; i++;
        beat.pause();
    }
    else {
        clearInterval(ticktick_2);
        beat.pause();
    }
}



// stop section 
document.querySelector('#stop').onclick = function stop() {
    document.querySelector('#time').value = '';
    count = 1;
    hand.style.transform = `rotate(0deg)`;
    srotation = 0;
    play_pause.classList.remove("action");
    i = temp = 0;
    beat.pause();
    clearInterval(ticktick_1);
}


// resume section 
document.querySelector('#resume').onclick = function () {
    function timer2() {
        if (temp > 0 && count == 0) {
            temp -= 6;
            console.log(temp);
            beat.play();
            hand.style.transform = `rotate(${temp}deg)`;
            if (temp == 0) {
                beat.pause();
                document.querySelector('#time').value = '';
                count = 1;
                hand.style.transform = `rotate(0deg)`;
                srotation = 0;
                play_pause.classList.remove("action");
                button.classList.remove("active");
                i = temp = 0;
                clearInterval(ticktick_1);
            }

        }
    }
    ticktick_2 = setInterval(timer2, 1000);
}



