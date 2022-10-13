> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je, zoals altijd, in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Ruilproces Buurtcampus Oost
Een website dat het ruilproces en doneren mogelijk maakt voor stekjes/planten binnen Buurtcampus Oost Amsterdam.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Het project bestaat uit 5 HTML pagina's: index.html, form.html, traded.html, donateform.html en donated.html. De flow van de pagina's kan op 2 manieren:

1. index.html -> form.html -> traded.html
2. index.html -> donateform.html -> donated.html

Het project werkt met required formulieren waarin je gegevens en foto's kan delen, verder kan je in form.html ook plantjes/stekjes kiezen van Buurtcampus Oost zelf. Na het proces krijg je in traded.html (ook in donateform.html) een code die je kan inleveren als bewijs bij het ophalen van je plantje.
<!-- Voeg een mooie poster visual toe 📸 -->
![image](https://user-images.githubusercontent.com/112855878/195730597-1052c71b-685c-47b2-a719-63d364c2e478.png)
<!-- Voeg een link toe naar Github Pages 🌐-->
Link naar de wiki: https://github.com/Tolga1999/the-client-case/wiki

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De website is gebouwd in HTML, CSS en Javascript.
### De structuur
De HTML structuur ziet er als volgt uit: body -> overlay -> header -> main -> footer. Binnnen de body is er een overlay gemaakt voor het tonen van het menu, dit is gedaan met `z-index: 1;`. Verder staat er in main het formulier die je kan invullen.

_de overlay staat standaard "uit" en wordt getoond met de JS onclick functie_
``` html
<div class="overlay">
       <div class="buttons">
            <button class="ruilenDoneren" onclick="gaTerug()">Ga terug</button>
            <a class="ruilenDoneren" href="index.html">Home</a>
            <a class="ruilenDoneren" href="html/form.html">Ruilen</a>
            <a class="ruilenDoneren" href="html/donateform.html">Doneren</a>
       </div> 
</div>
```

Het menu staat standaard "uit" in CSS, door te klikken op de knop "Menu" wordt de visibility en opacity van het menu weer op 100% gezet. Er wordt een class toegevoegd aan overlay om de ease in animatie mogelijk te maken binnen de class.
``` js
function menuOpen() {
    overlay.classList.add('overlayOn')
    menuButton.style.visibility = 'hidden'
    menuButton.style.opacity = '0'
    body.style.overflow = 'hidden'
}
```

``` css
.overlayOn{
    visibility: visible;
    opacity: 1;
}
```
## Bronnen
Voor oplossingen en informatie over HTML, CSS en JS heb ik gebruik gemaakt van de volgende websites:
- [stackoverflow.com](https://stackoverflow.com/)
- [w3schools.com](https://www.w3schools.com/)
- [css-tricks.com](https://css-tricks.com/)
- [MDN web docs](https://developer.mozilla.org/en-US/).
