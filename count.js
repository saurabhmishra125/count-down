const end=new Date("14 mar 2024 12:00 pm");
const time=document.querySelectorAll("input");
 
let stop=setInterval(function (){
const current=new Date();
const diff=(end-current)/1000;

if(diff<=0){
   return
  }
  console.log(diff);
const day=Math.floor(diff/3600/24);
console.log(day +"days");
const hour=Math.floor((diff-day*24*3600)/3600);
console.log(hour +"hour");
const minute=Math.floor((diff-(day*86400 + hour*3600))/60);
console.log(minute +" minute");
const second=Math.floor(diff-(day*86400 + hour*3600 + minute*60));
console.log(second +" second");
time[0].value=day;
time[1].value=hour;
time[2].value=minute;
time[3].value=second;

},1000);
