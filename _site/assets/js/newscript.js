// media query event handler
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 540px)");
    mq.addListener(scaleDown);
    scaleDown(mq);
}

// media query change
function scaleDown(mq) {
    if (!mq.matches) {
        document.getElementById("Denis McDonald").textContent = "DMcD";
        // window width is at least 540px
    } else {
        // window width is more than 540px
        document.getElementById("Denis McDonald").textContent = "Denis McDonald";
    }
}