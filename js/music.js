
    // Setzt den Standardwert der Lautstärke auf 30% (0.3)
    window.addEventListener("load", function () {
    const audioPlayer = document.getElementById("audio-player");
    const volumeSlider = document.getElementById("volume-slider");

    // Setzt die Lautstärke des Audioplayers und des Sliders auf 30%
    audioPlayer.volume = 0.15;
    volumeSlider.value = 0.15;

    // Lautstärkeregler anpassen
    volumeSlider.addEventListener("input", function () {
    audioPlayer.volume = volumeSlider.value;
});
});

    // Audio-Element und Lautstärkeregler
    const audioPlayer = document.getElementById("audio-player");
    const volumeControl = document.getElementById("volume-container");
    const volumeSlider = document.getElementById("volume-slider");

    // Wenn die Musik abgespielt wird, zeige den Lautstärkeregler an
    audioPlayer.addEventListener("play", function() {
    volumeControl.classList.remove('hidden');  // Regler anzeigen
});

    // Wenn die Musik pausiert wird, verstecke den Lautstärkeregler
    audioPlayer.addEventListener("pause", function() {
    volumeControl.classList.add('hidden');  // Regler ausblenden
});

    // Wenn die Musik zu Ende ist, verstecke den Lautstärkeregler
    audioPlayer.addEventListener("ended", function() {
    volumeControl.classList.add('hidden');  // Regler ausblenden
});

    // Lautstärkeregler anpassen
    volumeSlider.addEventListener("input", function() {
    audioPlayer.volume = volumeSlider.value;  // Lautstärke des Audio-Players anpassen
});

