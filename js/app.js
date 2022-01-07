const hours = document.querySelector('#hours');
const minit = document.querySelector('#minit');
const ampm = document.querySelector('#ampm');
const secend = document.querySelector('#secend');
const day = document.querySelector('#day');
const tarik = document.querySelector('#date');


setInterval( () => {
    let date = new Date();
    day.innerHTML = weeck(date.getDay())
    ampm.innerHTML = amPmCal(date.getHours())
    hours.innerHTML = zeroAdd(date.getHours() > 12 ? date.getHours() - 12 : date.getHours() )
    minit.innerHTML = zeroAdd(date.getMinutes())
    secend.innerHTML = zeroAdd(date.getSeconds())
    tarik.innerHTML = `${zeroAdd(date.getDay())}/${zeroAdd(date.getMonth() == date.getMonth() ? date.getMonth() + 1 : date.getMonth()) }/${date.getFullYear()}`
    
},1000)