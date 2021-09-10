

/*

Project 5: Build a clock using JavaScript.

Requirements:
-Create a Github repository for this project. 
-Display the hours, minutes, and seconds.
-The clock should run by itself. (Hint: look at JavaScript setInterval function)

*/

/*
create a display for clock
create variables for am/pm, date, hour, min, seconds
create conditional on how the time progresses
create functions to hold the code

*/
var myInterval = setInterval(showTime, 1000);

function showTime() {
    var date =  new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM"
    
    if(h === 0) {
        h = 12;
    }
    
    if(h > 12) {
        h = h -12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    

   
    setTimeout(showTime, 1000);
}


showTime();
