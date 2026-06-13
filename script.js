const songs = [

    {
        title: "Song One",
        artist: "Artist One",
        src: "./songs/song1.mp3",
        cover: "./images/cover1.jpeg"
    },

    {
        title: "Song Two",
        artist: "Artist Two",
        src: "./songs/song2.mp3",
        cover: "./images/cover2.jpeg"
    },

    {
        title: "Song Three",
        artist: "Artist Three",
        src: "./songs/song3.mp3",
        cover: "./images/cover3.jpeg"
    }

];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const playBtn = document.getElementById("playBtn");
const volume = document.getElementById("volume");

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
    cover.src = song.cover;
}

loadSong(songs[currentSong]);

function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = "⏸";
    }
    else {
        audio.pause();
        playBtn.textContent = "▶";
    }
}

function nextSong() {
    currentSong++;

    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }

    loadSong(songs[currentSong]);
    audio.play();
    playBtn.textContent = "⏸";
}

function prevSong() {
    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);
    audio.play();
    playBtn.textContent = "⏸";
}

audio.addEventListener("timeupdate", () => {

    progress.value = (audio.currentTime / audio.duration) * 100;

});

progress.addEventListener("input", () => {

    audio.currentTime = (progress.value / 100) * audio.duration;

});

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});

