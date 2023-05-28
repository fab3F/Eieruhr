let alarm = new Audio('alarm.mp3');
    let start = false;
    let button = document.getElementById('button');
    let timer = document.getElementById('timer');
    let interval;


    function starte() {
      if (start == false) {
        start = true;
        button.src = 'images/stop.png';
        startTimer();
      } else {
        start = false;
        button.src = 'images/start.png';
        stopTimer();
      }

    }

    function startTimer() {
      let startTime = new Date().getTime();
      let fiveMinutes = 1000 * 60 * 5;
      let endTime = startTime + fiveMinutes;
    
      interval = setInterval(function() {
        let timeLeft = endTime - new Date().getTime();
        if (timeLeft > 0) {
          let minutes = Math.floor(timeLeft / (1000 * 60));
          let seconds = Math.floor((timeLeft / 1000) % 60);
          seconds = ('0' + seconds).slice(-2);
          let text = ('0' + minutes).slice(-2) + ' : ' + seconds;
          timer.innerHTML = text;
        } else {
          if (start = true) {
            alarm.play();
            timer.innerHTML = '05 : 00';
            start = false;
            button.src = 'images/start.png';
            clearInterval(interval);
          }
        }
      }, 1000);
    }
    
    
    function stopTimer(){
      start = false;
      clearInterval(interval);
      timer.innerHTML = '05 : 00';
    }