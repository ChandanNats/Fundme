// Simulate a donation update (you can later integrate a real API or payment platform)
let donated = 30000; // Change this dynamically as needed
let goal = 100000;
let progress = (donated / goal) * 100;

document.getElementById("progress").style.width = `${progress}%`;
document.getElementById("donated-amount").innerText = `₹${donated.toLocaleString()} raised`;
