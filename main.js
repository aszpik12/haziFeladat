import { TERMEKLISTA } from "./adatok.js";

$(function () {
  const ARTICLE = $("article");
  ARTICLE.append(divek);
});

function divek() {
  let txt = "";
  for (let i = 0; i < TERMEKLISTA.length; i++) {
    txt += `<div>`
    txt += `<h2>${TERMEKLISTA[i].termek}</h2>`;
    txt += `<img src="${TERMEKLISTA[i].kep}" alt="termék"><br>`;
    txt += `<a> darab: ${TERMEKLISTA[i].darab}</a><br>`;
    txt += `<a> ár: ${TERMEKLISTA[i].ar}</a><br >`;
    txt += "<button><<</button><button>>></button>";
    txt += `</div>`
  }
  console.log(txt);
  return txt;
}
