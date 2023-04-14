import { TERMEKLISTA } from "./adatok.js";

let db = 0;
let kosar = `kosár: `+ db;

$(function () {
  const ARTICLE = $("article");
  const FOCIM = $("#focim");
  const FOOTER = $("footer");
  FOCIM.html(`<h1>Vásárlói felület<h1>`);
  ARTICLE.append(divek);
  const MODELID = $("#myModal .modal-content");
  const INFOELEM = $(".info");
  const KOSARELEM = $(".kosar");
  FOOTER.html(kosar);

  INFOELEM.on("click", function () {
    // modal on click programozása HIBÁS
    let id = event.target.id;
    console.log(id);
    let modelbelselye = `
    <div class="modal-header">
      <h4 class="modal-title">${TERMEKLISTA[id].termek}</h4>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>

    <!-- Modal body -->
    <div class="modal-body">
    <div class="card">
    
    <img src="${TERMEKLISTA[id].kep}" class="nagykep" alt="termék"><br>
    <p class="card-body"> leírás: ${TERMEKLISTA[id].leiras}</p><br>
    <div class="card-footer btn-group">
    </div>
    

    <!-- Modal footer -->
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    </div>`;
    MODELID.html(modelbelselye);
  });

  KOSARELEM.on("click", function () {
    db++;
    kosar = `kosár: `+ db;
    FOOTER.html(kosar);
  });
});

function divek() {
  let txt = "";
  for (let i = 0; i < TERMEKLISTA.length; i++) {
    //áru lusta legenerálása
    txt += `<div class="card col-lg-3 col-md-4 col-sm-6">`;
    txt += `<h2 class="card-header">${TERMEKLISTA[i].termek}</h2>`;
    txt += `<img src="${TERMEKLISTA[i].kep}" class="kiskep" alt="termék"><br>`;
    txt += `<p class="card-body"> ár: ${TERMEKLISTA[i].ar}</p><br>`;
    txt += `<p class="card-body"> darab: ${TERMEKLISTA[i].darab}</p><br>`;
    txt += `<div class="card-footer btn-group">
          <button class="info btn btn-dark" data-bs-toggle="modal" data-bs-target="#myModal" id="${i}">Info</button>
          <button class="kosar btn btn-dark" ">Kosárba</button>
          </div>`;
    txt += `</div>`;
  }

  txt += `<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Modal Heading</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>`;

  //console.log(txt);

  return txt;
}
