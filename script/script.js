const hamburger = document.getElementById("hamburger-btn");
const nav = document.getElementById("nav-menu");

// Jednoduché přepínání třídy
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-open");
});

// Zavření menu při kliknutí na odkaz
nav.addEventListener("click", (e) => {
    if(e.target.tagName === 'A') {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-open");
    }
});

// Kontrola šířky (reset menu při zvětšení okna)
window.addEventListener("resize", () => {
    if (window.innerWidth > 810) {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-open");
    }
});

function odeslatHoluba() {
    var jmeno = document.getElementById('jmeno').value;
    var predmet = document.getElementById('predmet').value;
    var zprava = document.getElementById('zprava').value;

    if(jmeno === "" || predmet === "" || zprava === "") {
        alert("Poddaný, rač prosím vyplnit všechna pole, jinak holub nevzletí! (ale krátce, inkoust jest pro spodinu jako ty drahý!)");
        return;
    }

    var adresat = "jakub.korinsky@student.souepl.cz";

    var teloEmailu = 
        "Vaše ctěná hraběcí Excelence,\n\n" + 
        zprava + "\n\n" +
        "_______________________________________\n" +
        "S hlubokou úctou Vám přeje\n" +
        jmeno;

    window.location.href = "mailto:" + adresat + 
                           "?subject=" + encodeURIComponent(predmet) + 
                           "&body=" + encodeURIComponent(teloEmailu);
}

const logoContainer = document.getElementById('logo-container');
const royalHat = document.getElementById('royal-hat');
const portraitImg = document.getElementById('portrait-img');
const portraitFrame = document.getElementById('portrait-frame');
const logo_inicialy = document.getElementById('logo_inicialy');

let isRoyalMode = false;

logoContainer.addEventListener('click', () => {
    isRoyalMode = !isRoyalMode;
    portraitFrame.classList.toggle('active-royal');
    if (isRoyalMode) {
        royalHat.classList.remove('hat-hidden');
        royalHat.classList.add('hat-visible');
        
        logo_inicialy.classList.add('active-royal');

        
    } else {
        royalHat.classList.remove('hat-visible');
        royalHat.classList.add('hat-hidden');

        logo_inicialy.classList.remove('active-royal');

    }
});