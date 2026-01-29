const containerElement = document.querySelector(".container")
const imageElement = document.getElementById("music-image")
const musicName = document.getElementById("music-name")
const artistName = document.getElementById("artist")
const musicAudio = document.getElementById("audio")
const playPauseIcon = document.querySelector(".fa-play")
const playPauseButton = document.querySelector(".play-pause")

let musicIndex = 3

window.addEventListener('load',() => {
    loadMusic(musicIndex)
    playMusic()
})

function loadMusic(musicIndex){
    imageElement.src = allMusic[musicIndex].image
    musicName.innerHTML = allMusic[musicIndex].name
    artistName.innerHTML = allMusic[musicIndex].artist
    musicAudio.src = allMusic[musicIndex].src
}

function playMusic(){
    containerElement.classList.add("pause")
    playPauseIcon.classList.add("fa-pause")
    musicAudio.play()
}

function pauseMusic(){
    containerElement.classList.remove("pause")
    playPauseIcon.classList.remove("fa-pause")
    musicAudio.pause()
}


playPauseButton.addEventListener('click',() => {
    const isPlaying = containerElement.classList.contains("pause")
    isPlaying ? pauseMusic() : playMusic()

})