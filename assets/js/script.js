document.querySelector("html").onload = function() {
  this.className = "";
}

// Check to see if a colour theme (light or dark) has been selected previously
var storedThemePreference = localStorage.getItem("themePreference");

switch (storedThemePreference) {
  case null:
    document.querySelector(".toggle-theme").addEventListener("click", lightsOn);
    break;
  case "0":
    lightsOff();
    break;
  case "1":
    lightsOn();
    break;
}

// Apply light theme and set user preference to light theme
function lightsOn() {
  var lightSwitch = document.querySelector(".light-switch");
  html = document.querySelector("html");
  html.classList.add("light");
  var lightSwitch = document.querySelector(".toggle-theme");
  lightSwitch.textContent = "Dark Theme";
  localStorage.setItem("themePreference", "1");
  lightSwitch.removeEventListener("click", lightsOn);
  lightSwitch.addEventListener("click", lightsOff);
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
  html = document.querySelector("html");
  html.classList.add("dark");
  var lightSwitch = document.querySelector(".toggle-theme");
  lightSwitch.textContent = "Light Theme";
  localStorage.setItem("themePreference", "0");
  lightSwitch.removeEventListener("click", lightsOff);
  lightSwitch.addEventListener("click", lightsOn);
  document.body.classList.remove("body-light");
  for (i = 0; i < document.getElementsByTagName("a").length; i++) {
    document.getElementsByTagName("a")[i].classList.remove("a-light");
  }
  lightSwitch.setAttribute("title", "Turn on light colour theme");
  lightSwitch.setAttribute("aria-pressed", false);
}

// ================================================================ //
// ================================================================ //
// ================================================================ //

// const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

// if (theme === "dark") {
// 	document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else if (theme === "light") {
// 	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// } else if (userPrefers === "dark") {
// 	document.documentElement.setAttribute('data-theme', 'dark');
// 	window.localStorage.setItem('theme', 'dark');
// 	document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else {
// 	document.documentElement.setAttribute('data-theme', 'light');
// 	window.localStorage.setItem('theme', 'light');
// 	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// }

// function modeSwitcher() {
// 	const currentMode = document.documentElement.getAttribute('data-theme');
// 	if (currentMode == "dark" || window.matchMedia("(prefers-color-scheme: dark").matches) {
// 		document.documentElement.classList.add('color-theme-in-transition');
// 		document.documentElement.setAttribute('data-theme', 'light');
// 		window.localStorage.setItem('theme', 'light');
// 		document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// 	} else {
// 		document.documentElement.classList.add('color-theme-in-transition');
// 		document.documentElement.setAttribute('data-theme', 'dark');
// 		window.localStorage.setItem('theme', 'dark');
// 		document.getElementById("theme-toggle").innerHTML = "Light Mode";
// 	}
// }
