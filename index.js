let resultHome = document.getElementById("result-home")
let resultGuest = document.getElementById("result-guest")

let home = 0
let guest = 0

function refresh() {
    home = 0
    guest = 0
    resultHome.innerText = home
    resultGuest.innerText = guest
}

function homeOne() {
    home += 1
    resultHome.innerText = home
}

function homeTwo() {
    home += 2
    resultHome.textContent = home
}

function homeThree() {
    home += 3
    resultHome.textContent = home
}

function guestOne() {
    guest += 1
    resultGuest.innerText = guest
}

function guestTwo() {
    guest += 2
    resultGuest.textContent = guest
}

function guestThree() {
    guest += 3
    resultGuest.textContent = guest
}
