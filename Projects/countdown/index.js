document.getElementById("startBtn").addEventListener("click", startTimer);

function startTimer() {
  const minutesInput = document.getElementById("minutes");
  const countdownDisplay = document.getElementById("countdown");
  let time = parseInt(minutesInput.value) * 60;

  const timerInterval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    countdownDisplay.textContent = `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;

    if (time <= 0) {
      clearInterval(timerInterval);
      alert("Time is up!");
    }
    time--;
  }, 1000);
}
