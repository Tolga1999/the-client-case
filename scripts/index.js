let overlay = document.querySelector('.overlay')
let overlayPlant = document.querySelector('.overlayPlant')
let menuButton = document.getElementById('menuButton')
let body = document.querySelector('body')
// selecteren van files
let kiesPlant = document.querySelector('.kiesPlant')
let inruilText = document.querySelector('.inruilText')
// plant kiezen van oba
let plantInput = document.querySelectorAll(".plantInruilen")

// doneer pagina
let doneerText = document.querySelector('.doneerText')
let doneerPlant = document.querySelector('.doneerPlant')

// reviews
const star1 = document.querySelector('.starIcon1')
const star2 = document.querySelector('.starIcon2')
const star3 = document.querySelector('.starIcon3')
const star4 = document.querySelector('.starIcon4')
const star5 = document.querySelector('.starIcon5')

function menuOpen() {
    overlay.classList.add('overlayOn')
    menuButton.style.visibility = 'hidden'
    menuButton.style.opacity = '0'
    body.style.overflow = 'hidden'
}

function gaTerug() {
    overlay.classList.remove('overlayOn')
    menuButton.style.visibility = 'visible'
    menuButton.style.opacity = '1'
    body.style = ''
}

// ruilen pagina
function selectedFile() {
    inruilText.innerHTML = 'Klik nogmaals voor een andere keuze'
    if (kiesPlant.src === 'http://127.0.0.1:5500/assets/cactus.jpg')
        kiesPlant.src = '/assets/plant3.jpg' //hardcoded omdat ik geen local resources kan inladen
    else {
        kiesPlant.src = '/assets/cactus.jpg'
    }
}

function kiezenPlantje() {
    overlayPlant.classList.add('overlayOn')
    body.style.overflow = 'hidden'

    // foreach wordt gebruikt voor elke element binnen de array
    plantInput.forEach(element => {
        element.style.opacity = "0"
    })
}

function gekozenPlantje(){
    overlayPlant.classList.remove('overlayOn')
    plantInput.forEach(element => {
        element.style.opacity = "1"
    })
    body.style.overflow = 'scroll'
    let kiesPlant2 = document.querySelector('.kiesPlant2')
    if(kiesPlant2.src == 'http://127.0.0.1:5500/assets/plant4.jpg'){
        kiesPlant2.src = '/assets/plant.jpg'
    }else
    kiesPlant2.src = '/assets/plant4.jpg'
}

// doneer pagina
function selectedDoneerFile() {
    doneerText.innerHTML = 'Klik nogmaals voor een andere keuze'
    if (doneerPlant.src == 'http://127.0.0.1:5500/assets/cactus.jpg')
        doneerPlant.src = '/assets/plant3.jpg' //hardcoded omdat ik geen local resources kan inladen
    else {
        doneerPlant.src = '/assets/cactus.jpg'
    }
}

// donated page
function tradedpage() {
    window.location.href = "/html/traded.html"; // verander locatie na het completen van de form naar donated.html
}

function donatedpage() {
    window.location.href = "/html/donated.html"; // verander locatie na het completen van de form naar donated.html
}

function fillStars(star) {
    switch (star) {
        case 1:
            star1.style.opacity = '1'
            break
        case 2:
            star1.style.opacity = '1'
            star2.style.opacity = '1'
            break
        case 3:
            star1.style.opacity = '1'
            star2.style.opacity = '1'
            star3.style.opacity = '1'
            break
        case 4:
            star1.style.opacity = '1'
            star2.style.opacity = '1'
            star3.style.opacity = '1'
            star4.style.opacity = '1'
            break
        case 5:
            star1.style.opacity = '1'
            star2.style.opacity = '1'
            star3.style.opacity = '1'
            star4.style.opacity = '1'
            star5.style.opacity = '1'
            break
    }
}


function normallStars() {
    star1.style.opacity = '0.5'
    star2.style.opacity = '0.5'
    star3.style.opacity = '0.5'
    star4.style.opacity = '0.5'
    star5.style.opacity = '0.5'
}