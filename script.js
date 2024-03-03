const piano = document.getElementById('piano');
const audio = document.getElementById('audio');

piano.addEventListener('click', playNote);

function playNote(e) {
    const key = e.target;
    const note = key.dataset.note;

    if (!note) return;

    const audioSrc = `sounds/${note}.mp3`;
    audio.src = audioSrc;
    audio.play();
}
