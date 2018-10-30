const audrey = document.getElementById("audrey")
const container = document.getElementById("container")
console.log(audrey)
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/


document.addEventListener("scroll", function () {
  let windowScroll = window.scrollY / 3
  audrey.style.width = `${windowScroll}px`
  audrey.style.minWidth = "50px"
  audrey.style.height = `${windowScroll}px`
  audrey.style.minHeight = "100px"
  console.log(windowScroll)
})

    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */