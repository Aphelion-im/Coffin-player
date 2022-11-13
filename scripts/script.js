/*
- https://www.w3schools.com/tags/ref_av_dom.asp
*/

'use strict';

window.addEventListener('load', () => {
  const audioPlayer = document.querySelector('#audioPlayer');
  const playButton = document.querySelector('#play');
  const displayCurrentTime = document.querySelector('.displayCurrentTime');
  const nowPlaying = document.querySelector('.header-2 ');
  const nextSong = document.querySelector('#nextSong');
  const prevSong = document.querySelector('#prevSong');
  const progress = document.querySelector('.progress');
  const progressVolume = document.querySelector('.progressVolume');
  const songPlayingNumber = document.querySelector('.songPlayingNumber');
  const mainImg = document.querySelector('main img');
  const volumeIcon = document.querySelector('.volumeIcon');
  const volumeDisplay = document.querySelector('.volumeDisplay');
  const downloadSong = document.querySelector('.download');

  let songIndex = 0;
  let playing = false;
  let muted = false;
  let rememberVolume = 1;

  // Initial showing of information on the Coffin player GUI
  initPlayer();
  updateDownloadedSong();

  // Functions

  // Initialize the player
  function initPlayer() {
    nowPlaying.textContent = songs[songIndex].displayName;
    songPlayingNumber.textContent = `${songs[songIndex].id} / ${songs.length}`;
  }

  function updateSongNumberPlaying() {
    songPlayingNumber.textContent = `${songs[songIndex].id} / ${songs.length}`;
  }

  function updateDownloadedSong() {
    downloadSong.href = `sounds/${songs[songIndex].filename}`;
    downloadSong.download = `${songs[songIndex].filename}`;
    downloadSong.title = `Download '${songs[songIndex].displayName}' Mp3`;
  }

  function checkIfPlaying() {
    if (playing) {
      audioPlayer.play();
      playButton.classList.replace('fa-play', 'fa-pause');
      playing = true;
    } else {
      audioPlayer.pause();
      playButton.classList.replace('fa-pause', 'fa-play');
      playing = false;
    }
  }

  // Play progress bar in % - Visual part. And update current time
  function playProgress() {
    let duration = audioPlayer.duration;
    const currentTime = audioPlayer.currentTime;
    const percentagePlayer = (currentTime / duration) * 100;
    let currentSeconds = Math.floor(currentTime % 60);
    const currentMinutes = Math.floor(currentTime / 60);
    let durationSeconds = Math.floor(duration % 60);
    let durationMinutes = Math.floor(duration / 60);

    if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
    if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;

    // Prevent NaN from displaying on the player when song not yet loaded.
    // Delay switching duration Element to avoid NaN
    // If NaN (= falsey) do not display elements. If a value (= truthy), display elements
    if (durationSeconds && percentagePlayer) {
      displayCurrentTime.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
      progress.value = `${percentagePlayer}`;
    }
  }

  const resetPlayer = () => {
    songIndex = 0;
    playButton.classList.replace('fa-pause', 'fa-play');
    audioPlayer.src = `sounds/${songs[songIndex].filename}`;
    nowPlaying.textContent = songs[songIndex].displayName;
    songPlayingNumber.textContent = `${songs[songIndex].id} / ${songs.length}`;
    checkIfPlaying();
    updateDownloadedSong();
  };

  // Event listeners

  // Play song and display file name
  // Toggle Play/Pause
  playButton.addEventListener('click', () => {
    if (playing === false) {
      playButton.classList.replace('fa-play', 'fa-pause');
      playButton.setAttribute('title', 'Pause');
      playing = true;
      audioPlayer.play();
    } else {
      playButton.classList.replace('fa-pause', 'fa-play');
      playButton.setAttribute('title', 'Play');
      playing = false;
      audioPlayer.pause();
    }
  });

  // Play the next song and display file name.
  nextSong.addEventListener('click', () => {
    songIndex++;
    if (songIndex > songs.length - 1) songIndex = 0;
    audioPlayer.src = `sounds/${songs[songIndex].filename}`;
    nowPlaying.textContent = songs[songIndex].displayName;
    checkIfPlaying();
    updateSongNumberPlaying();
    updateDownloadedSong();
  });

  // Play the previous song and display file name.
  prevSong.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0) songIndex = songs.length - 1;
    audioPlayer.src = `sounds/${songs[songIndex].filename}`;
    nowPlaying.textContent = songs[songIndex].displayName;
    checkIfPlaying();
    updateSongNumberPlaying();
    updateDownloadedSong();
  });

  // Seeker. Choose which part of the song to play by clicking the progress bar
  progress.addEventListener('click', (e) => {
    // Set the new time
    audioPlayer.currentTime =
      (e.offsetX / progress.offsetWidth) * audioPlayer.duration;
    // Update the visual aspect of the progressbar to match the new time
    progress.value = `${(e.offsetX / progress.offsetWidth) * 100}`;
  });

  // Adjust volume
  progressVolume.addEventListener('click', (e) => {
    // Before you click Mute, remember the original volume
    rememberVolume = (e.offsetX / progressVolume.offsetWidth) * 1;
    if (rememberVolume > 0.9) rememberVolume = 1;
    if (rememberVolume < 0.1) {
      rememberVolume = 0;
      volumeIcon.classList.replace('fa-volume-up', 'fa-volume-mute');
    } else {
      volumeIcon.classList.replace('fa-volume-mute', 'fa-volume-up');
    }
    audioPlayer.volume = rememberVolume;
    progressVolume.value = `${rememberVolume * 100}`;
    progressVolume.setAttribute(
      'title',
      `${(rememberVolume * 100).toFixed() + '% volume'}`
    );
    volumeDisplay.textContent = `${(rememberVolume * 100).toFixed() + '%'}`;
  });

  // Mute functionality
  volumeIcon.addEventListener('click', (e) => {
    if (!muted) {
      muted = true;
      volumeIcon.classList.replace('fa-volume-up', 'fa-volume-mute');
      volumeIcon.setAttribute('title', 'Unmute');
      audioPlayer.volume = 0;
      progressVolume.value = `${rememberVolume * 0}`;
    } else {
      muted = false;
      audioPlayer.volume = rememberVolume;
      volumeIcon.classList.replace('fa-volume-mute', 'fa-volume-up');
      volumeIcon.setAttribute('title', 'Mute');
      progressVolume.value = `${rememberVolume * 100}`;
    }
  });

  // Reset. Click on Dr. Chappie's icon to jump to song #1
  mainImg.addEventListener('click', resetPlayer);

  audioPlayer.addEventListener('timeupdate', playProgress);
}); // End of Load eventlistener

/* To do 
-- Refactor. Arrow functions. Objects. DRY. Functions.
-- Rechtsboven: Loading icon, loading, how to load
-- Error: Uncaught (in promise) DOMException: The play() request was interrupted by a new load request.

*/
