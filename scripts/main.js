var higher = document.getElementById('higher'),
    lower = document.getElementById('lower');

higher.addEventListener('touchstart', higherStart);
higher.addEventListener('touchend', higherEnd);
lower.addEventListener('touchstart', lowerStart);
lower.addEventListener('touchend', lowerEnd);

function higherStart() {
    $('#higher_pressed').css({display: 'inherit'});
}
function higherEnd(e) {
    $('#higher_pressed').css({display: 'none'});
}

function lowerStart() {
    $('#lower_pressed').css({display: 'inherit'});
}
function lowerEnd(e) {
    $('#lower_pressed').css({display: 'none'});
}