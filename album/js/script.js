Amplitude.init({
    "songs": [
        {
            "name": "Silience",
            "artist": "Toonorth",
            "album": "",
            "url": "song/silience.mp3",
        },
        {
            "name": "Get you the moon",
            "artist": "Kina (ft. Snow)",
            "album": "",
            "url": "song/moon.mp3",
        },
        {
            "name": "Goodnight",
            "artist": "RNLA (ft. DNAKM)",
            "album": "",
            "url": "song/good.mp3",
        }
    ],
    "volume": 7,
    callbacks: {

        song_change: function () {
            Amplitude.play();
        }
    }
});
