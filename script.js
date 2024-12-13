const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const loveMessage = document.getElementById('loveMessage');

// Position the "Nie" button randomly on the screen
function randomPosition() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * (screenWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (screenHeight - buttonHeight));

    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

// Make the "No" button move on hover
noButton.addEventListener('mouseover', () => {
    randomPosition();
});

// Show "Aj ja teba ❤️" message when "Yes" is clicked
yesButton.addEventListener('click', () => {
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
    loveMessage.style.display = 'block';
});

// Position the "No" button at the start (next to "Yes" button)
function positionNoButtonInitially() {
    const yesButtonRect = yesButton.getBoundingClientRect();
    noButton.style.left = yesButtonRect.right + 20 + 'px';
    noButton.style.top = yesButtonRect.top + 'px';
}

// Call the function to position "No" button next to "Yes" button
positionNoButtonInitially();

// Reposition button on window resize
window.addEventListener('resize', positionNoButtonInitially);
