const container = document.body;

const fireworks = new Fireworks(container, fireworksConfig);

function padZero(number) {
    return number.toString().padStart(2, '0');
}

const sounds = [
    new Audio('/sounds/léas solais - nightvibez.mp3'),
    new Audio('/sounds/aunt - Cravings.mp3'),
    new Audio('/sounds/GoldFuzion - Until I Met You.mp3'),
    new Audio('/sounds/Dpsht, tenkousei. - shores.mp3')
];

let currentSoundIndex = 0;

function playNextSound() {
    const currentSound = sounds[currentSoundIndex];
    currentSound.currentTime = 0;

    currentSound.onended = () => {
        currentSoundIndex = (currentSoundIndex + 1) % sounds.length;
        playNextSound();
    };

    currentSound.play();
}

var countdownEnded = false;

function countdownToNewYear() {
    if (!countdownEnded) {
        const now = new Date();
        const nextYear = now.getFullYear() + 1;
        const newYear = new Date(`January 1, ${nextYear} 00:00:00`);
        const timeDiff = newYear - now;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        const totalHours = days * 24 + hours;

        const hoursSpan = document.getElementById("hours");
        const minutesSpan = document.getElementById("minutes");
        const secondsSpan = document.getElementById("seconds");

        hoursSpan.textContent = padZero(totalHours);
        minutesSpan.textContent = padZero(minutes);
        secondsSpan.textContent = padZero(seconds);

        const countdownContainer = document.getElementById("countdown-container");

        if (seconds <= 10 && minutes === 0 && totalHours === 0) {
            for (let i = 1; i <= 100; i++) {
                setTimeout(function() {
                    sounds[currentSoundIndex].volume = 1 - (i / 100); // Fade all the way out
                }, i * 20);
            }
            setTimeout(function() {
                sounds[currentSoundIndex].pause();
            }, 2000);
            countdownContainer.classList.add("wobble");
            setTimeout(function() {
                countdownContainer.classList.remove("wobble");
            }, 300);
        }

        if (seconds === 0 && minutes === 0 && totalHours === 0) {
            countdownContainer.classList.add("explode");
            countdownEnded = true;
            const currentYearSpan = document.getElementById("year");
            currentYearSpan.textContent = nextYear;
            setTimeout(function() {
                const endTextContainer = document.getElementById("end-text-container");
                endTextContainer.classList.add("show-text");
            }, 500)
            fireworks.start();
        }
    }
}


playNextSound();

const countdownInterval = setInterval(countdownToNewYear, 1000);
