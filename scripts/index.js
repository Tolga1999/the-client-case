function menuOpen(){
    let overlay = document.getElementById('overlay')
    let menuButton = document.getElementById('menuButton')
    if(overlay.style.display == 'inline'){
        overlay.style.display = 'none'
        menuButton.style.display = 'inline'
    }else{
        overlay.style.display = 'inline'
        menuButton.style.display = 'none'
    }
}

function gaTerug(){
    let gaTerugKnop = document.getElementById('gaTerugKnop')
    overlay.style.display = 'none'
    menuButton.style.display = 'inline'
}