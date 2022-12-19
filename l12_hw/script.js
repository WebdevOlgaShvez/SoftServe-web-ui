setInterval(setClock, 1000);

const time = document.querySelector('.time')

function setClock() {
    const today= new Date();
  
 let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 let monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 
  let hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds(),
      day = days[today.getDay()],
      date =today.getDate(),
      month = monthes[today.getMonth()],
      year = today.getFullYear();

time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)} ${addZero(day)},  ${addZero(date)} ${addZero(month)} ${addZero(year)}`;
 
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
} 

setClock();
