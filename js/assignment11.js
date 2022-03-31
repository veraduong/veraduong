// Mouse over / out image change

function setNewImg() {
    document.getElementById('img1').src='../img/meAndNova.png';
}

function setOldImg() {
    document.getElementById('img1').src='../img/profile.png';
}

function start() {

    // Mouse over / out Header Color Change

    document.getElementById("header").onmouseover = function() {mouseOver()};
    document.getElementById("header").onmouseout = function() {mouseOut()};

    function mouseOver() {
        document.getElementById("header").style.color = "#fa709a";
    }

    function mouseOut() {
        document.getElementById("header").style.color = "#33272a";
    }

    // Button color change when clicked
    
    const btn = document.getElementById('button-1');

    btn.addEventListener('click', buttonClicked);

    function buttonClicked() {
        btn.classList.toggle('is-blue');
    }
}
window.onload = start;

