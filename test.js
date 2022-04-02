
// toggle
let button = document.getElementById("myBtn")
let items = document.getElementById("items-wrapper")

button.addEventListener("click", ()=> {
    items.classList.toggle("hide")
})


let toggleIcon = document.getElementById("icon")
console.log(toggleIcon)
let myText = document.getElementById("myText")

toggleIcon.addEventListener("click", () => {
    myText.classList.toggle("my-text")
})
