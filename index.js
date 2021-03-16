// inspired by this brilliant Udemy course: https://www.udemy.com/course/50-projects-50-days/

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const button = document.getElementById("btn");
const time = document.querySelector(".time");
const date = document. querySelector(".date");
const circle = document.querySelector(".circle");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

button.addEventListener("click", () => {
  const html = document.documentElement;

  html.classList.toggle("dark");
});

function setTime() {
  const today = new Date();

  const hour = today.getHours() % 12;
  const minute = today.getMinutes();
  const second = today.getSeconds();
  const ampm = today.getHours() >= 12 ? "PM" : "AM";

  const day = today.getDay();
  const month = today.getMonth();
  const dayOfMonth = today.getDate();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 12, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

  hourEl.style.transition = `${hour === 0 ? "none" : "all 0.5s ease-in"}`;
  minuteEl.style.transition = `${minute === 0 ? "none" : "all 0.5s ease-in"}`;
  secondEl.style.transition = `${second === 0 ? "none" : "all 0.5s ease-in"}`;

  time.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`;
  date.innerHTML = `${days[day]}, ${months[month]} <span class='circle'> ${dayOfMonth}</span>`;
};

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();

setInterval(setTime, 1000);
