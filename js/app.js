const hours = document.querySelector('#hours');
const minit = document.querySelector('#minit');
const ampm = document.querySelector('#ampm');
const secend = document.querySelector('#secend');
const day = document.querySelector('#day');
const tarik = document.querySelector('#date');


setInterval(() => {
    let date = new Date();
    let h = date.getHours() === 0 ? 12 : date.getHours();
    day.innerHTML = weeck(date.getDay())
    ampm.innerHTML = amPmCal(date.getHours())
    hours.innerHTML = zeroAdd(h > 12 ? h - 12 : h)
    minit.innerHTML = zeroAdd(date.getMinutes())
    secend.innerHTML = zeroAdd(date.getSeconds())
    tarik.innerHTML = `${zeroAdd(date.getDate())}/${zeroAdd(date.getMonth() == date.getMonth() ? date.getMonth() + 1 : date.getMonth()) }/${date.getFullYear()}`






}, 1000)

setInterval(() => {
    // 2nd Watch
    let date = new Date();
    const hours2 = document.querySelector('#hours2');
    const munit2 = document.querySelector('#munit2');
    const secend2 = document.querySelector('#secend2');
    const ampm2 = document.querySelector('.ampm2');
    const day2 = document.querySelector('.day2');

    secend2.innerHTML = zeroAdd(date.getSeconds());
    munit2.innerHTML = zeroAdd(date.getMinutes())
    day2.children[1].innerHTML = `${zeroAdd(date.getDate())}/${monthCal(date.getMonth()) }`
    day2.children[0].innerHTML = weeck2(date.getDay())
    hours2.innerHTML = zeroAdd(date.getHours() > 12 ? date.getHours()  - 12 : date.getHours() )
    ampm2.innerHTML = date.getHours() > 12 ? "PM" : "AM";



},1000)