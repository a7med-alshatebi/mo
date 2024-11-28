// Set the birthday date (e.g., December 25, 2024)
const birthday = new Date("Dec 4, 2024 00:00:00").getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Find the time remaining
    const distance = birthday - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, display the gift and balloons
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("countdown").innerHTML = "";
        document.getElementById("giftContainer").style.display = "block";
        createBalloons(); // Start creating balloons once countdown ends
    }
}, 1000);

// Function to create floating balloons
function createBalloons() {
    const balloonContainer = document.getElementById('balloonContainer');
    
    // Number of balloons to generate
    for (let i = 0; i < 10; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Randomize balloon size and position
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;

        // Add random balloon color class
        const balloonType = `balloon${Math.floor(Math.random() * 5) + 1}`;
        balloon.classList.add(balloonType);

        // Append the balloon to the container
        balloonContainer.appendChild(balloon);
    }
}
