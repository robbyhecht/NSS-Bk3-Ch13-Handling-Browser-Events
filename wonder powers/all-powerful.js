// ALL-POWERFUL FUNCTION
// activateAll and deactivateAll button variables
let activateAll = document.querySelector("#activate-all")
let deactivateAll = document.querySelector("#deactivate-all")
// class selector for both functions below
let powerClass = document.querySelectorAll(".power")
// activate all function
let powerAll = () => {
  for (let i=0; i < powerClass.length; i++) {
    powerClass.item(i).classList.replace("disabled", "enabled")
  }
}
// deactivate all function
let powerNone = () => {
  for (let i=0; i < powerClass.length; i++) {
    powerClass.item(i).classList.replace("enabled", "disabled")
  }
}
// event listeners set on buttons
activateAll.addEventListener("click", powerAll)
deactivateAll.addEventListener("click", powerNone)