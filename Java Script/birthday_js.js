function calculateAge() {
    var dobInput = document.getElementById('dob');
    var dob = new Date(dobInput.value);
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    var resultDiv = document.getElementById('result');
    resultDiv.textContent = "Congratulations as you turn " + age + " years old mama🎂. On your special day, I wish you boundless joy, peace, and happiness. May all your dreams and desires come true. Thank you for everything you do, Mom. You deserve all the love and appreciation in the world. Happy birthday, Mom! I love you and may God bless you and guide you all the days of your life🤗";
}

var audioPlayer = document.getElementById('audioPlayer');
var playButton = document.getElementById('playButton');

playButton.addEventListener('click', function() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.classList.remove('play');
        playButton.classList.add('pause');
    } else {
        audioPlayer.pause();
        playButton.classList.remove('pause');
        playButton.classList.add('play');
    }
});

audioPlayer.addEventListener('ended', function() {
    playButton.classList.remove('pause');
    playButton.classList.add('play');
});