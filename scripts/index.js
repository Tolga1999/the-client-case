let overlay = document.querySelector('.overlay')
let menuButton = document.getElementById('menuButton')
let body = document.querySelector('body')
// selecteren van files
let kiesPlant = document.querySelector('.kiesPlant')
let inruilText = document.querySelector('.inruilText')
// doneer pagina
let doneerText = document.querySelector('.doneerText')
let doneerPlant = document.querySelector('.doneerPlant')

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
        kiesPlant.src = '/assets/arrowDown.png' //hardcoded omdat ik geen local resources kan inladen
    else {
        kiesPlant.src = '/assets/cactus.jpg'
    }
}

// doneer pagina
function selectedDoneerFile() {
    doneerText.innerHTML = 'Klik nogmaals voor een andere keuze'
    if (doneerPlant.src === 'http://127.0.0.1:5500/assets/cactus.jpg')
        doneerPlant.src = '/assets/arrowDown.png' //hardcoded omdat ik geen local resources kan inladen
    else {
        doneerPlant.src = '/assets/cactus.jpg'
    }
}

// donated page
function donatedpage(){
    window.location.href="/html/donated.html"; // verander locatie na het completen van de form naar donated.html
}