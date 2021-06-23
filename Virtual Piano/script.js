document.addEventListener('keydown', function (e) {
    let key = e.key.toUpperCase();
    if ('ASDFGHJWETYU'.includes(key)) {
        new Audio(`${key}.mp3`).loop();
        Audio.play()
    }
    else console.log(`Inappropriate key is pressed.`);

});

document.addEventListener("hover",function (a){
    let array= document.getElementsByClassName("white-keys");

});

function getWhiteKeyWidth() {
    return window.getComputedStyle(document.querySelector('.white-keys kbd')).width;
}

function resizeBlackKeys() {
    let whiteKeyWidth = getWhiteKeyWidth().replace('px', '');
    let blackKeyWidth = whiteKeyWidth / 2;

    for (let i of document.querySelectorAll('.black-keys kbd')) {
        i.style = `width: ${blackKeyWidth}px;`
    }
}

resizeBlackKeys();
window.addEventListener('resize', function (e) {
    resizeBlackKeys();
})

