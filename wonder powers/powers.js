// FLIGHT FUNCTION

// make a variable for the selected button
let activateFlight = document.querySelector("#activate-flight")
// function creates variable for dom location and then replaces class of this location
let flightHandlerFunction = () => {
  let flight = document.getElementById("flight")
  flight.classList.replace("disabled", "enabled")
}
// event listener on the button runs the class-changing function when clicked
activateFlight.addEventListener("click", flightHandlerFunction)


// MINDREADING FUNCTION
let activateMindreading = document.querySelector("#activate-mindreading")
let mindreadingFunction = () => {
  let mindreading = document.getElementById("mindreading")
  mindreading.classList.replace("disabled", "enabled")
}
activateMindreading.addEventListener("click", mindreadingFunction)


// XRAY FUNCTION
let activateXray = document.querySelector("#activate-xray")
let xrayFunction = () => {
  let xray = document.getElementById("xray")
  xray.classList.replace("disabled", "enabled")
}
activateXray.addEventListener("click", xrayFunction)