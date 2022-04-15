/* function animations() {
    var altText = document.getElementById("alt-text");
    var titleText = document.getElementById("title-text");
    titleText.style.fontSize = "1750%";
    setTimeout(function() {
        var background = document.getElementById("background-main");
        background.style.backgroundColor = "black";
        titleText.style.color = "white";
    }, 1000);
    setTimeout(function() {
        titleText.innerHTML = "drıs";
    }, 1250);
    setTimeout(function() {
        var accent = document.getElementById("background-accent");
        accent.style.width = "50%";
        titleText.style.left = "25%";
    }, 1500);
    setTimeout(function() {
        dot.style.opacity = "1";
        pointerEvent = true;
    }, 3000)

    var dot = document.getElementById("pointer");
    var pointerEvent = false;
    var moveCursor = function(e) {
        var mouseY = e.clientY;
        var mouseX = e.clientX;
        dot.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px, 0)";
        collisions(dot, altText, pointerEvent, 1);
        var accent = document.getElementById("background-accent");
        collisions(dot, accent, pointerEvent);
    }
    window.addEventListener('mousemove', moveCursor);

}

function collisions(pointer, text, event, type) {
    var elem1 = pointer.getBoundingClientRect();
    var elem2 = document.getElementById("title-text").getBoundingClientRect();

    if (event === true) {
        if (elem1.right < elem2.left || elem2.right < elem1.left || elem1.bottom < elem2.top || elem2.bottom < elem1.top) {
            console.log("not touching");
            if (type === 1) {
                pointer.style.opacity = "1";
                text.style.opacity = "0";
            } else {
                pointer.style.opacity = "0.5";
                text.style.width = "52.5%";
            }
        } else {
            console.log("touching");
            if (type === 1) {
                pointer.style.opacity = "0";
                text.style.opacity = "1";
            } else {
                pointer.style.opacity = "1";
                text.style.width = "50%";
            }
        }
    }
} */