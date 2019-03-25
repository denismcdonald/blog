var body = document.body;
var links = document.getElementsByTagName("a");
var lightSwitch = document.querySelector(".light-switch");
var lightSrc = lightSwitch.getAttribute("src");

if (localStorage.getItem("themePreference") == "1") {
 
  lightSwitch.setAttribute("src", "/assets/images/light-on.svg");
        lightSwitch.setAttribute("title", "Turn on dark colour theme");
        body.classList.toggle("body-light");
        for (i = 0; i < links.length; i++) {
            links[i].classList.add("a-light");
          }
        lightSrc = lightSwitch.getAttribute("src");

};

lightSwitch.addEventListener("click", function changeTheme() {
    if (lightSrc == "/assets/images/light-off.svg") {
        lightSwitch.setAttribute("src", "/assets/images/light-on.svg");
        lightSwitch.setAttribute("title", "Turn on dark colour theme");
        body.classList.toggle("body-light");
        for (i = 0; i < links.length; i++) {
            links[i].classList.add("a-light");
          }
        lightSrc = lightSwitch.getAttribute("src");
        localStorage.setItem("themePreference", "1");
    } else {
        lightSwitch.setAttribute("src", "/assets/images/light-off.svg");
        body.classList.toggle("body-light");
        lightSwitch.setAttribute("title", "Turn on light colour theme");
        for (i = 0; i < links.length; i++) {
            links[i].classList.remove("a-light");
          }
        lightSrc = lightSwitch.getAttribute("src");
        localStorage.setItem("themePreference", "0");
    } 
});