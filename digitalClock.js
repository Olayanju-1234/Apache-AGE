function myDigitalClock() {
    var d1 = new Date();
    var hours = d1.getHours(); // 0 - 23
    var minutes = d1.getMinutes(); // 0 - 59
    var seconds = d1.getSeconds(); // 0 - 59
    var zone = "AM";

    // Convert hours to 12-hour format and determine the AM/PM zone
    if (hours >= 12) {
        zone = "PM";
        hours = hours === 12 ? 12 : hours - 12;
    } else {
        zone = "AM";
        hours = hours === 0 ? 12 : hours;
    }

    // Add leading zeros for single-digit hours, minutes, and seconds
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    var digitalClock = hours + ":" + minutes + ":" + seconds + " " + zone;
    console.log(digitalClock);
}

// Call the function every second to update the clock
setInterval(myDigitalClock, 1000);
