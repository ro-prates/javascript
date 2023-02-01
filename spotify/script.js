const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("song");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

const wakawaka = {
    songName: "Waka Waka",
    band: "Shakira",
    path: "Waka Waka - Shakira",
    file: "shakira.png"
};

const imagine = {
    songName: "On Top of the World",
    band: "Imagine Dragons",
    path: "Imagine Dragons - On Top Of The World",
    file: "imagine.jpg"
};

const hey_ya = {
    songName: "Hey Ya!",
    band: "Outkast",
    path: "OutKast - Hey Ya!",
    file: "hey_ya.jpg"
};

let isPlaying = false;

const playlist = [wakawaka, imagine, hey_ya];
let index = 0;

function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function initalizeSong() {
    cover.src = `images/${playlist[index].file}`;
    song.src = `songs/${playlist[index].path}.mp3`;
    songName.innerText = playlist[index].songName;
    bandName.textContent = playlist[index].band;
}

function previousSong() {
    index--;
    if (index < 0) {
        index = playlist.length - 1;
    }
    initalizeSong();
    playSong();
}

function nextSong() {
    index++;
    if (index > playlist.length - 1) {
        index = 0;
    }
    initalizeSong();
    playSong();
}

initalizeSong();

play.addEventListener("click", playPauseDecider);
previous.addEventListener("click", previousSong);
next.addEventListener("click", nextSong);