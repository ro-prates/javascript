const songName = document.getElementById("song-name");
const song = document.getElementById("song");
const play = document.getElementById("play");
//const play = document.querySelector(".play");

songName.innerText = "Waka waka";

function playSong() {
    song.play();
    document.getElementById("pause").style.display = "block";
    document.getElementById("play").style.display = "none";
}

function pauseSong() {
    song.pause();
    document.getElementById("pause").style.display = "none";
    document.getElementById("play").style.display = "block";
}

play.addEventListener("click", playSong);
pause.addEventListener("click", pauseSong);
