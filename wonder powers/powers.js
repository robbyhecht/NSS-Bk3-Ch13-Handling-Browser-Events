// flight function
let activateFlight = document.querySelector("#activate-flight")
let flightHandlerFunction = () => {
  let flight = document.getElementById("flight")
  flight.classList.replace("disabled", "enabled")
}
activateFlight.addEventListener("click", flightHandlerFunction)

// mindreading function
let activateMindreading = document.querySelector("#activate-mindreading")
let mindreadingFunction = () => {
  let mindreading = document.getElementById("mindreading")
  mindreading.classList.replace("disabled", "enabled")
}
activateMindreading.addEventListener("click", mindreadingFunction)

// xray function
let activateXray = document.querySelector("#activate-xray")
let xrayFunction = () => {
  let xray = document.getElementById("xray")
  xray.classList.replace("disabled", "enabled")
}
activateXray.addEventListener("click", xrayFunction)