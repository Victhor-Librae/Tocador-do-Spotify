const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name')
const song = document.getElementById('audio');
const cover = document.getElementById('cover');
const play = document.getElementById('play');
const next = document.getElementById('next');
const previous = document.getElementById('previous');

const Russ = {
    songName : '3:15',
    artist : 'Russ',
    file : '_Breathe'  
};
const SeuDesejo = {
    songName : 'Vou Te Amando',
    artist : 'Seu Desejo',
    file : 'vou_te_amando' 
};
const Sza = {
    songName : 'Open Arms',
    artist : 'SZA',
    file : 'open_arms' 
};
let IsPlayIng = false;
const Faixa = [Russ, SeuDesejo, Sza]
let index = 0;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    IsPlayIng = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    IsPlayIng = false;
}

function PlayPauseDecider(){
    if(IsPlayIng === true){
        pauseSong();
    }
    else{
        playSong();
    }
}

function initializaSong(){
    cover.src = `images/${Faixa[index].file}.jpg`;
    song.src = `songs/${Faixa[index].file}.mp3`;
    songName.innerText = Faixa[index].songName;
    bandName.innerText = Faixa[index].artist;
}

function previousSong(){
    if(index === 0){
        index = Faixa.length -1;
    }
    else {
        index -= 1;
    }
    initializaSong();
    playSong();
}

function nextSong(){
    if(index === Faixa.length - 1){
        index = 0;
    }
    else {
        index += 1;
    }
    initializaSong();
    playSong();
}

initializaSong();

play.addEventListener('click', PlayPauseDecider);
previous.addEventListener('click', previousSong);
next.addEventListener('click', nextSong);


