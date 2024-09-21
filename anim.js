var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
    { text: "We could leave the Christmas lights up 'til January", time: 22.07 },
    { text: "And this is our place, we make the rules", time: 29.11 },
    { text: "And there's a dazzling haze, a mysterious way about you dear", time: 35.11 },
    { text: "Have I known you 20 seconds or 20 years?", time: 43.04 },
    { text: "Can I go where you go?", time: 49.10 },
    { text: "Can we always be this close forever and ever?", time: 56.03 },
    { text: "And ah, take me out, and take me home", time: 63.01 },
    { text: "You're my, my, my, my", time: 69.95 },
    { text: "Lover", time: 76.21 },
    
    { text: "We could let our friends crash in the living room", time: 85.12 },
    { text: "This is our place, we make the call", time: 92.25 },
    { text: "And I'm highly suspicious that everyone who sees you wants you", time: 98.17 },
    { text: "I've loved you three summers now, honey, but I want 'em all", time: 105.06 },
    { text: "Can I go where you go?", time: 112.03 },
    { text: "Can we always be this close forever and ever?", time: 119.05 },
    { text: "And ah, take me out, and take me home (forever and ever)", time: 126.07 },
    { text: "You're my, my, my, my", time: 133.23 },
    { text: "Lover", time: 139.61 },
    
    { text: "Ladies and gentlemen, will you please stand?", time: 140.38 },
    { text: "With every guitar string scar on my hand", time: 143.86 },
    { text: "I take this magnetic force of a man to be my lover", time: 147.42 },
    { text: "My heart's been borrowed and yours has been blue", time: 154.42 },
    { text: "All's well that ends well to end up with you", time: 158.00 },
    { text: "Swear to be overdramatic and true to my lover", time: 161.50 },
    { text: "And you'll save all your dirtiest jokes for me", time: 168.28 },
    { text: "And at every table, I'll save you a seat, lover", time: 174.72 },
    
    { text: "Can I go where you go?", time: 182.23 },
    { text: "Can we always be this close forever and ever?", time: 189.28 },
    { text: "And ah, take me out, and take me home (forever and ever)", time: 196.35 },
    { text: "You're my, my, my, my", time: 203.24 },
    { text: "Oh, you're my, my, my, my", time: 209.67 },
    { text: "Darling, you're my, my, my, my", time: 223.56 },
    { text: "Lover", time: 230.53 }
  ];
function updateLyrics() {
    var time = Math.floor(audio.currentTime);
    var currentLineIndex = lyricsData.findIndex(
        (line, index) => time >= line.time && (index === lyricsData.length - 1 || time < lyricsData[index + 1].time)
    );

    if (currentLineIndex !== -1) {
        var currentLine = lyricsData[currentLineIndex];
        var nextLineTime = (currentLineIndex === lyricsData.length - 1) ? Infinity : lyricsData[currentLineIndex + 1].time;
        
        // Asegura que la línea actual se muestre hasta que comience la siguiente línea
        if (time < nextLineTime) {
            var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
            var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

            // Aplica el efecto de aparición
            lyrics.style.opacity = opacity;
            lyrics.innerHTML = currentLine.text;
        }
    } else {
        // Cuando no hay línea actual, ocultar las letras
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

setInterval(updateLyrics, 100); // Actualiza más frecuentemente para una transición más suave