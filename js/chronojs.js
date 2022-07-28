
      let chrono = document.getElementById("chrono");
      let startButton = document.getElementById("chrono");
      let stopButton = document.getElementById("stop");
      let times = document.getElementById("times");
      let resetButton = document.getElementById("reset");
      let counter = 0;
      let started = false;
      let interval;
      let max = 0;
      let min = 1000;
      function increment() {
        if (started) {
          counter++;
          display();
        }
      }
      function display() {


        let seconds = (counter % 60) + 100;
        
        let minutes = Math.floor((counter % 3600)/60)+100 ;
        
        let hours =  Math.floor(counter / 3600)+100 ;
      




        chrono.innerHTML =
            hours.toString()[1] +
            hours.toString()[2] +
            " : "+
          minutes.toString()[1] +
          minutes.toString()[2] +
          " : " +
          seconds.toString()[1] +
          seconds.toString()[2];
      }

  
      startButton.onclick = function () {
        if (!started) {
          chrono.classList="green";
          interval = setInterval(increment, 1000);
          started = true;
        }
        else {
            chrono.classList="orange";
            clearInterval(interval);
            started = false;
        }
      };

     

      stopButton.addEventListener("click", function () {
        clearInterval(interval);
        started = false;
        chrono.classList="chrono";

        if (counter > max) {
          times.innerHTML += "<li class='red'>" + chrono.innerHTML + "</li>";
          max = counter;
          counter = 0;
          display();
          return;
        }
        if (counter < min) {
          times.innerHTML += "<li class='greeen'>" + chrono.innerHTML + "</li>";
          min = counter;
          counter = 0;
          display();
          return;
        }
        times.innerHTML += "<li>" + chrono.innerHTML + "</li>";
        counter = 0;
        display();
      });

      resetButton.addEventListener("click", function () {
        counter = 0;
        started = false;
        display();
        chrono.classList="chrono";
        clearInterval(interval);
      });