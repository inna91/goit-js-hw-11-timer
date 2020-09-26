const refs = {
  counter: document.querySelector('#timer-1'),
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

const textContent = (days, hours, mins, secs) => {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
};

const countingTime = time => {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  textContent(days, hours, mins, secs);
};

function pad(value) {
  return String(value).padStart(2, '0');
}

setInterval(() => {
  const targetDate = new Date('Feb 01, 2021');
  const currentTime = Date.now();
  const time = targetDate - currentTime;
  countingTime(time);
}, 1000);
