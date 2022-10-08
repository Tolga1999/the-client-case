let overlay = document.querySelector('.overlay')
let menuButton = document.getElementById('menuButton')
let body = document.querySelector('body')

function menuOpen(){
    overlay.classList.add('overlayOn')
    menuButton.style.display = 'none'
    body.style.position = 'fixed'
}

function gaTerug(){
    overlay.classList.remove('overlayOn')
    menuButton.style.display = 'inline'
    body.style = ''
}