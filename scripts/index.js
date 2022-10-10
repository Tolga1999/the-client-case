let overlay = document.querySelector('.overlay')
let menuButton = document.getElementById('menuButton')
let body = document.querySelector('body')
// selecteren van files
let kiesPlant = document.querySelector('.kiesPlant')

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

function selectedFile() {
    if (kiesPlant.src === 'http://127.0.0.1:5500/assets/cactus.jpg')
        kiesPlant.src = '/assets/arrowDown.png' //hardcoded omdat ik geen local resources kan inladen
    else {
        kiesPlant.src = '/assets/cactus.jpg'
        console.log(kiesPlant.src)
    }
}