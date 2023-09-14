// Write a program to display the current day and time in the following format.
// Sample Output :  Today is : .............
// Currrent time is : ...........

// solution:-
// let a;
// let date;
// let time;
// const option ={weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'};
// setInterval(() => {
//   a = new Date();
//   date = a.toLocaleDateString(undefined,option);
//   time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
//   document.getElementById('time').innerHTML = time + " <br>"+"ON " +  date ;
// }, 1000);

// let today = new Date();
// let day = today.getDay();
// let daylist = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let hour = today.getHours();
// let minute = today.getMinutes();
// let second = today.getSeconds();

// let prepand = hour >= 12 ? "PM" : "AM";
// hour = hour >= 12 ? hour - 12 : hour;
// if (hour === 0 && pepend === "PM") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = "Noon";
//   } else {
//     hour = 12;
//     prepand = "PM";
//   }
// }
// if (hour === 0 && prepand === "AM") {
//   if (minute === 0 && second === 0) {
//     hour = 12;
//     prepand = "Midnight";
//   } else {
//     hour = 12;
//     prepand = "AM";
//   }
// }
// a = console.log(
//   "Current Time is " + hour + prepand + ":" + minute + ":" + second
// );
// setInterval(() => {
//   document.getElementById("time").innerHTML =
//     "Current Time is " + hour + ":" + minute + ":" + second + prepand;
// }, 1000);


let a;
let time;
let date;
const option= {weekday:'long',year:'numeric',month:'long',day:'numeric'}
setInterval(() => {
  a=new Date;
  date= a.toLocaleDateString(undefined,option)
  time=a.getHours()+":"+a.getMinutes()+":"+ a.getSeconds();
  document.getElementById('time').innerHTML=time+" <br>"+date;
}, 1000);
