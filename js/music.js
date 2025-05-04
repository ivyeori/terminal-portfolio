window.addEventListener("load", function () {
    const audioPlayer = document.getElementById("audio-player");
    const volumeSlider = document.getElementById("volume-slider");
    const volumeControl = document.getElementById("volume-container");

    // Setzt die Lautstärke des Audioplayers und des Sliders auf 15%
    audioPlayer.volume = 0.15;
    volumeSlider.value = 0.15;

    // Audio soll im Loop laufen
    audioPlayer.loop = true;

    // Lautstärkeregler anpassen
    volumeSlider.addEventListener("input", function () {
        audioPlayer.volume = volumeSlider.value;
    });

    // Wenn die Musik abgespielt wird, zeige den Lautstärkeregler an
    audioPlayer.addEventListener("play", function() {
        volumeControl.classList.remove('hidden');
    });

    // Wenn die Musik pausiert wird, verstecke den Lautstärkeregler
    audioPlayer.addEventListener("pause", function() {
        volumeControl.classList.add('hidden');
    });

    // Optional: Wenn du den Regler beim Ende trotzdem verstecken willst,
    // bleibt das Verhalten gleich, aber das Audio läuft automatisch weiter.
    audioPlayer.addEventListener("ended", function() {
        volumeControl.classList.add('hidden');
    });
});
