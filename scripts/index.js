let overlay = document.querySelector('.overlay')
let menuButton = document.getElementById('menuButton')
let body = document.querySelector('body')

function menuOpen(){
    overlay.classList.add('overlayOn')
    menuButton.style.visibility = 'hidden'
    menuButton.style.opacity = '0'
    body.style.overflow = 'hidden'
}

function gaTerug(){
    overlay.classList.remove('overlayOn')
    menuButton.style.visibility = 'visible'
    menuButton.style.opacity = '1'
    body.style = ''
}