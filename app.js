function animations() {
    var titleText = document.getElementById("title-text");
    titleText.style.fontSize = "300px";
    setTimeout(function() {
        var background = document.getElementById("background-main");
        background.style.backgroundColor = "black";
        titleText.style.color = "white";
    }, 1000);
    setTimeout(function() {
        titleText.innerHTML = "drıs";
    }, 1250);
    setTimeout(function() {
        titleText.style.left = "25%";
    }, 1500);

    var dot = document.getElementById("pointer");
    var moveCursor = function(e) {
        var mouseY = e.clientY;
        var mouseX = e.clientX;
        dot.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px, 0)";
    }
    window.addEventListener('mousemove', moveCursor)
}

