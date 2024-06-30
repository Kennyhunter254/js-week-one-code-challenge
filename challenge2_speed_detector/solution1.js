const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function speedDetector() {
    let speed = prompt("Enter the speed of the car:");
    speed = parseInt(speed);

    if (speed < 70) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - 70) / 5);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + points);
        }
    }
}

speedDetector();