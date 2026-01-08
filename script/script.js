const hamburger = document.querySelector(".wrapper-hamburger");
const nav = document.querySelector("nav");

let state = false;

hamburger.addEventListener("click", () => {
  if (state === true) {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-open");
    state = false;
  } else {
    hamburger.classList.add("is-active");
    nav.classList.add("is-open");
    state = true;
  }
});

nav.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-open");
    state = false;
});


function ControlWidth() {
  const sirka = window.innerWidth;
  if (sirka > 810) {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-open");
    state = false;
  }
}
window.addEventListener("resize", ControlWidth);

function odeslatHoluba() {
            var jmeno = document.getElementById('jmeno').value;
            var predmet = document.getElementById('predmet').value;
            var zprava = document.getElementById('zprava').value;

            if(jmeno === "" || predmet === "" || zprava === "") {
                alert("Vaše Excelence, račte prosím vyplnit všechna pole, jinak holub nevzletí!");
                return;
            }

            var adresat = "jakub.korinsky@student.souepl.cz";

            var teloEmailu = 
                "Vaše Excelence,\n\n" + 
                zprava + "\n\n" +
                "----------------------------------------\n" +
                "S hlubokou úctou,\n" +
                jmeno;

            window.location.href = "mailto:" + adresat + 
                                   "?subject=" + encodeURIComponent(predmet) + 
                                   "&body=" + encodeURIComponent(teloEmailu);
        }


        