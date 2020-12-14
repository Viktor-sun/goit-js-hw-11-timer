import './styles.css';

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

// ================================================
// setInterval(timer, 1000);

// function timer() {
//   const targetDate = new Date('January 1, 2021');
//   const currentTime = Date.now();
//   const deltaTime = targetDate - currentTime;
//   const time = getTimeComponents(deltaTime);
//   updateClockface(time);
// }

// function getTimeComponents(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { days, hours, mins, secs };
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function updateClockface({ days, hours, mins, secs }) {
//   refs.days.textContent = days;
//   refs.hours.textContent = hours;
//   refs.mins.textContent = mins;
//   refs.secs.textContent = secs;
// }

// ============================================

class CountdownTimer {
  constructor({ selector, targetDate, refs: objRefs }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.objRefs = objRefs;

    this.getTimer();
  }
  getTimer() {
    const currentTime = Date.now();
    const deltaTime = this.targetDate - currentTime;
    const time = this.getTimeComponents(deltaTime);
    this.updateClockface(time);
  }
  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  updateClockface({ days, hours, mins, secs }) {
    this.objRefs.days.textContent = days;
    this.objRefs.hours.textContent = hours;
    this.objRefs.mins.textContent = mins;
    this.objRefs.secs.textContent = secs;
  }

  go() {
    setInterval(() => {
      this.getTimer();
    }, 1000);
  }
}

const newYearTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('January 1, 2021'),
  refs,
});

newYearTimer.go();
