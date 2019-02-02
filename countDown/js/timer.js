function _timer(callback) {
    var timer_id; //    This is used by setInterval function

    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 

    this.start = function (timeSec) {

        document.getElementById("minutes").setAttribute("type", "hidden");
        var timeSec = document.getElementById("minutes").value * 60;
        var display = document.getElementById("displayTime");

        var timer = timeSec,
            minutes, seconds;

        M.toast({
            html: timeSec / 60 + " mins timer strated."
        })




        timer_id = setInterval(function () {


            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = timeSec;
            }
 
            if (minutes == 0 && seconds == 0) {
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
        document.getElementById("minutes").setAttribute("type", "text");
    }

    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset = function () {
        clearInterval(timer_id);
        document.getElementById("displayTime").textContent ='00:00';
        document.getElementById("minutes").setAttribute("type", "text");
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