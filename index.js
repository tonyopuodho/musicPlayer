const containerElement = document.querySelector(".container")
const imageElement = document.getElementById("music-image")
const musicName = document.getElementById("music-name")
const artistName = document.getElementById("artist")

let musicIndex = 2

window.addEventListener('load',() => {
    loadMusic(musicIndex)
})

function loadMusic(musicIndex){
    imageElement.src = allMusic[musicIndex].image
    musicName.innerHTML = allMusic[musicIndex].name
    artistName.innerHTML = allMusic[musicIndex].artist
}