

var hourhd = document.getElementById("hour");
var minheading = document.getElementById("min");
var secheading = document.getElementById("Sec");
var millisecheading = document.getElementById("Msec");

var hour = 0;
var min = 0;
var Sec = 0;
var Msec = 0;

var interval;

// Reset function
function reset() {
  clearInterval(interval);
  hour = 0;
  min = 0;
  Sec = 0;
  Msec = 0;

  hourhd.innerHTML = hour;
  minheading.innerHTML = min;
  secheading.innerHTML = Sec;
  millisecheading.innerHTML = Msec;

  document.getElementById("startButton").disabled = false;
}

// Timer function
function startTimer() {
  Msec++;
  millisecheading.innerHTML = Msec;

  if (Msec >= 100) {
    Sec++;
    secheading.innerHTML = Sec;
    Msec = 0;

    // 5 sec test audio
    if (Sec % 5 === 0 && Msec === 0) {
      alarmSound.play(); 
    }

    if (Sec >= 60) {
      min++;
      minheading.innerHTML = min;
      Sec = 0;

      if (min >= 60) {
        hour++;
        hourhd.innerHTML = hour;
        min = 0;
      }
    }
  }
}

// Start button
function start() {
  var startBtn = document.getElementById("startButton");
  interval = setInterval(startTimer, 10);
  startBtn.disabled = true; 
}

// Stop button
function stp() {
  clearInterval(interval);
  document.getElementById("startButton").disabled = false;
}
