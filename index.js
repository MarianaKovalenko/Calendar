let date = new Date();
let days = [
  "Sunday/Неділ",
  "Monday/Понеділок",
  "Tuesday/Вівторок",
  "Wednesday/Середа",
  "Thursday/Четвер",
  "Friday/П'ятниця",
  "Saturday/Субота",
];
let day = days[date.getDay()];
let months = [
  "January/Січень",
  "February/Лютий",
  "March/Березень",
  "April/Квітень",
  "May/Травень",
  "June/Червень",
  "July/Липень",
  "August/Серпень",
  "September/Вересень",
  "October/Жовтень",
  "November/Листопад",
  "December/Грудень",
];
let month = months[date.getMonth()];
let numberDay = date.getDate();

document.querySelector("#btn").onclick = function () {
  document.querySelector(".title").innerHTML = "";
  document.querySelector(".numberDate").innerHTML = numberDay;
  document.querySelector(".month").innerHTML = month;
  document.querySelector(".day").innerHTML = day;
};
