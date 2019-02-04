function _timer(callback) {
    var timer_id; //    This is used by setInterval function
    var status;
    var time;
    var timeSec = document.getElementById("minutes").value * 60;
    var display = document.getElementById("displayTime");

    var timer = timeSec,
        minutes, seconds;
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 

    this.start = function (status) {
        timeSec = document.getElementById("minutes").value * 60;
        document.getElementById("minutes").setAttribute("type", "hidden");
        console.log(timeSec);
        timer = timeSec;
        
      

        M.toast({
            html: timeSec / 60 + " mins timer strated."
        })



        // if (status == 0) {
    
            timer_id = setInterval(function () {


                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

                if (--timer < 0) {
                    timer = timeSec;
                }
                    console.log(minutes);
                    
                if (minutes == '00' && seconds == '00') {
                    clearInterval(timer_id);
                    document.getElementById("minutes").setAttribute("type", "text");
                    M.toast({
                        html: "Fin"
                    })

                }

                callback(time);
            }, 1000);
        
    }




    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop = function () {
        clearInterval(timer_id);
    }

    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset = function () {
        clearInterval(timer_id);
        document.getElementById("displayTime").textContent = '00:00';
        document.getElementById("minutes").setAttribute("type", "text");
        document.getElementById("minutes").value = '';
        this.timer = 0,0,0;
        this.timeSec = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

}


// example use
var timer;

$(document).ready(function (e) {
    timer = new _timer(
        function (time) {
            if (time == 0) {
                timer.stop();
                alert('time out');
            }
        }
    );

});