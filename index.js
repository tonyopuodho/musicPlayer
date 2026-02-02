const containerElement = document.querySelector(".container")
const imageElement = document.getElementById("music-image")
const musicName = document.getElementById("music-name")
const artistName = document.getElementById("artist")
const musicAudio = document.getElementById("audio")
const playPauseIcon = document.querySelector(".fa-play")
const playPauseButton = document.querySelector(".play-pause")
const nextButtonElement = document.querySelector(".fa-forward")
const backButtonElement = document.querySelector(".fa-backward")
const progressElement = document.querySelector(".progress")
const startElement = document.getElementById("start-timer")
const endElement = document.getElementById("end-timer")

let musicIndex = 2

window.addEventListener('load',() => {
    loadMusic(musicIndex)
})

nextButtonElement.addEventListener('click',() => {
    musicIndex += 1
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex
    loadMusic(musicIndex)
    playMusic()

})

backButtonElement.addEventListener('click', () => {
    musicIndex -= 1
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex
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

musicAudio.addEventListener('timeupdate',(event) => {
    const duration = event.target.duration
    const current = event.target.currentTime
    const progress = (current / duration) * 100
    progressElement.style.width = `${progress}%`
    
    musicAudio.addEventListener('loadeddata', () => {
        let duration = musicAudio.duration
        let minute = Math.floor(duration / 60)
        let seconds = Math.floor(duration % 60)

        if (seconds < 10) {
            seconds = `0${seconds}`
        }
        endElement.innerHTML = `${minute}:${seconds}`
    })

    let currntMin = Math.floor(current / 60)
    let currntSec = Math.floor(current % 60)

    if (currntSec < 10) {
        currntSec = `0${currntSec}`
    }
    
    startElement.innerHTML = `${currntMin}:${currntSec}`
})

playPauseButton.addEventListener('click',() => {
    const isPlaying = containerElement.classList.contains("pause")
    isPlaying ? pauseMusic() : playMusic()
})