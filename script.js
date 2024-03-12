// const endDate = "10 March 2024 07:25 PM";
var endDate = prompt("Please enter the end date and time (format: DD Month YYYY HH:MM AM/PM)", "10 March 2024 07:25 PM");

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");
const alarmSound = new Audio('Alarm.mp3');
function clock() {
    const end = new Date(endDate);
    console.log(end);
    const now = new Date();
    const diff = (end - now) / 1000;
    if (diff<1) {
        return;
    }
    // converting to days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // converting to hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // converting to minutes
    inputs[2].value = Math.floor(diff / 60) % 60; 
    //converting to seconds
    inputs[3].value= Math.floor(diff)%60;

    if (diff <= 60 && alarmSound.paused) { // Check if the sound is paused
        alarmSound.play();
    }
}

clock();
setInterval(
    () =>{
        clock()
    },
    1000
)
