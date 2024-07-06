// get id
let time = document.getElementById('time');

// Creat function setinterval
setInterval(function () {
   // get time
   let date = new Date();
   // get hours
   let hours = date.getHours();
   // get minutes
   let minutes = date.getMinutes();
   // get second
   let second = date.getSeconds();
   // get am pm
   let am = "AM";
   // hours -12
   if (hours > 12) {
      hours = hours - 12
      am = "PM"
   }
   // time 10 lessthen 0 add
   if (hours < 10) {
      hours = "0" + hours
   }
   if (minutes < 10) {
      minutes = "0" + minutes
   }
   if (second < 10) {
      second = "0" + second
   }
   // get times
   time.innerText = `${hours}:${minutes}:${second}:${am}`
}, 1000)