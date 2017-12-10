var higher = document.getElementById('higher'),
    lower = document.getElementById('lower');

higher.addEventListener('touchstart', higherStart);
higher.addEventListener('touchend', higherEnd);
//lower.addEventListener('touchstart', );
//lower.addEventListener('touchend', );

function higherStart(e) {
    alert('hefh');
    $('#higher_pressed').css({display: inherit});
}

function higherEnd(e) {
    alert('hefh');
    $('#higher_pressed').css({display: none});
}