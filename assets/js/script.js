console.log("Hello!");

var body = document.body;
var links = document.getElementsByTagName("a");
var lightSwitch = document.querySelector(".light-switch");
var lightSrc = lightSwitch.getAttribute("src");

lightSwitch.addEventListener("click", function changeTheme() {
 
    if (lightSrc == "/assets/images/light-on.svg") {
        lightSwitch.setAttribute("src", "/assets/images/light-off.svg");
        body.classList.toggle("body-dark");
        for (i = 0; i < links.length; i++) {
            links[i].classList.add("a-dark");
          }
        lightSrc = lightSwitch.getAttribute("src");
    } else if (lightSrc == "/assets/images/light-off.svg") {
        lightSwitch.setAttribute("src", "/assets/images/light-on.svg");
        body.classList.toggle("body-dark");
        for (i = 0; i < links.length; i++) {
            links[i].classList.remove("a-dark");
          }
        lightSrc = lightSwitch.getAttribute("src");
    } 
});




