let clockSecond = document.querySelector("#second");
let clockMinute = document.querySelector("#minute");
let clockHour = document.querySelector("#hour");
let clockAmPm = document.querySelector(".AM-PM");

setInterval(()=>{
    // for getting current time
    const date = new Date();
    console.log(date);
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    // convert to locale time with options 00:00:00 AM
    const time = date.toLocaleTimeString('en-US', options);
    console.log(time);

    //Extract AM/PM
    const ampm = time.slice(-2);
    console.log(ampm);
    
    //Extract Hours, Minutes, Seconds
    const [hours, minutes, seconds] = time.slice(0,-3).split(':');
    
    clockHour.textContent = hours;
    clockMinute.textContent = minutes;
    clockSecond.textContent = seconds;
    clockAmPm.textContent = ampm;
},1000);