const endDate = "08 March 2024 07:25 PM";
document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

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
}

clock();
setInterval(
    () =>{
        clock()
    },
    1000
)