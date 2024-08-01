const button = document.querySelectorAll(".button");
// total
const total = document.querySelector(".total")
// sign-up-container
const signupcontainer = document.querySelector(".sign-up-container")
// change-button
const changebutton = document.getElementById("change-button")

console.log(button);

function abc() {
    if (total.style.display == "block") {
        total.style.display = "none"
    }
    else{
        total.style.display = "block"
    }
}
