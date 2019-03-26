// Check to see if a colour theme (light or dark) has been selected previously
if (localStorage.getItem("themePreference") === null) {
  document.querySelector(".light-switch").addEventListener("click", lightsOn);
}
if (localStorage.getItem("themePreference") === "0") {
  lightsOff();
}
if (localStorage.getItem("themePreference") === "1") {
  lightsOn();
}


// Apply light theme and set user preference to light theme
function lightsOn() {
  var lightSwitch = document.querySelector(".light-switch");
  localStorage.setItem("themePreference", "1");
  lightSwitch.removeEventListener("click", lightsOn);
  lightSwitch.addEventListener("click", lightsOff);
  lightSwitch.style.backgroundImage = "url('/assets/images/light-on.svg')";
  document.body.classList.add("body-light");
  for (i = 0; i < document.getElementsByTagName("a").length; i++) {
    document.getElementsByTagName("a")[i].classList.add("a-light");
  }
  lightSwitch.setAttribute("title", "Turn on dark colour theme");
  lightSwitch.setAttribute("aria-pressed", true);
}


// Apply dark theme and set user preference to light theme
function lightsOff() {
  var lightSwitch = document.querySelector(".light-switch");
  localStorage.setItem("themePreference", "0");
  lightSwitch.removeEventListener("click", lightsOff);
  lightSwitch.addEventListener("click", lightsOn);
  lightSwitch.style.backgroundImage = "url('/assets/images/light-off.svg')";
  document.body.classList.remove("body-light");
  for (i = 0; i < document.getElementsByTagName("a").length; i++) {
    document.getElementsByTagName("a")[i].classList.remove("a-light");
  }
  lightSwitch.setAttribute("title", "Turn on light colour theme");
  lightSwitch.setAttribute("aria-pressed", false);
}