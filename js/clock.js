const clock = document.querySelector("h2#clock");
// const clock = document.getElementById("clock");

function getClock(){
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hour}:${minute}:${second}`);
}

getClock();
//코드를 일정한 시간 간격을 두고 반복해서 실행하고 싶을 때 사용
setInterval(getClock, 1000);

//코드를 바로 실행하지 않고, 일정 시간 기다린 후 실행하는 경우
// setTimeout(sayHello, 1000);
