import { TERMEKLISTA, KOSARLISTA } from "./adatok.js";

let db = 0;
let kosar = `kosár: ` + db;

$(function () {
  const ARTICLE = $("article");
  const FOCIM = $("#focim");
  const FOOTER = $("footer");
  const NAV = $("nav");
  FOCIM.html(`<h1>Vásárlói felület<h1>`);
  ARTICLE.html(divek);
  const MODELID = $("#myModal .modal-content");
  const INFOELEM = $(".info");
  const KOSARELEM = $(".kosar");
  const KOSAR = $(".kosar2003");
  const KEZD = $(".kezd2003");
  const ADMIN = $(".admin2003");
  const DELETE = $(".delete");
  FOOTER.html(kosar);
  navfeltoltes();

  //miután visszaváltok a kezdő oldalra nem tudok a kosárba helyezni dolgokat
  $(".linkek1").on("click", KEZD, function () {
    FOCIM.html(`<h1>Vásárlói felület<h1>`);
    ARTICLE.html(divek());
    console.log(divek());
  });

  //valamiért nem megy a delete console azt a hibát írja ki hogy not determined

  //valamiért nem megy a delete console azt a hibát írja ki hogy not determined
  function deleteterlist(event) {
    let id = event.target.id;
    TERMEKLISTA.splice(id, 1);
    console.log(TERMEKLISTA);
  }

  function kosarfelulet() {
    let kosar1 = "";
    for (let i = 0; i < KOSARLISTA.length; i++) {
      //Kosár losta kiiratása
      kosar1 += `<div class="deletediv card col-lg-3 col-md-4 col-sm-6">`;
      kosar1 += `<h2 class="card-header">${
        TERMEKLISTA[KOSARLISTA[i]].termek
      }<button class="delete" id="${i}" >X</button></h2>`;
      kosar1 += `<img src="${
        TERMEKLISTA[KOSARLISTA[i]].kep
      }" class="kiskep" alt="termék"><br>`;
      kosar1 += `<p class="card-body"> ár: ${
        TERMEKLISTA[KOSARLISTA[i]].ar
      }</p><br>`;
      kosar1 += `<p class="card-body"> darab: ${
        TERMEKLISTA[KOSARLISTA[i]].darab
      }</p><br>`;
      kosar1 += `<div class="card-footer btn-group">
          </div>`;
      kosar1 += `</div>`;
    }
    return kosar1;
  }

  function kosarkattintas() {
    FOCIM.html(`<h1>Kosár felület<h1>`);
    ARTICLE.html(kosarfelulet());
    $(".deletediv").on("click", DELETE, function () {
      let id = event.target.id;
      console.log(id);
      KOSARLISTA.splice(id, 1);
      kosarkattintas();
    });
    FOOTER.html(arosszead);
  }

  $(".linkek2").on("click", KOSAR, function () {
    kosarkattintas();
  });

  //admin felületre váltás
  $(".linkek3").on("click", ADMIN, function () {
    FOCIM.html(`<h1>Admin felület<h1>`);
    ARTICLE.html(adminfelulet);
    FOOTER.html(null);
  });

  function arosszead() {
    let ertek = 0;
    for (let i = 0; i < KOSARLISTA.length; i++) {
      ertek += TERMEKLISTA[KOSARLISTA[i]].ar;
    }
    let osszam = "Termékek összára: " + ertek + "ft";
    return osszam;
  }

  function navfeltoltes() {
    let nav = `<div class="container-fluid">
    <ul class="navbar-nav">
      <li class="linkek1 nav-item">
        <a class="kezd2003 nav-link" href="#" id="kezd2003">Termékek</a>
      </li>
      <li class="linkek2 nav-item">
        <a class="kosar2003 nav-link" href="#" id="kosar2003">Kosár  </a>
      </li>
      <li class="linkek3 nav-item">
        <a class="admin2003 nav-link" href="#" id="admin2003">Admin  </a>
      </li>
    </ul>
  </div>`;
    NAV.html(nav);
  }

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
    kosar = `kosár: ` + db;
    FOOTER.html(kosar);

    let id = event.target.id;
    KOSARLISTA.push(id);

    console.log(KOSARLISTA);
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
          <button class="kosar btn btn-dark" id="${i}">Kosárba</button>
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

function adminfelulet() {
  let txt = `<table class="table table-striped">`;
  for (let i = 0; i < TERMEKLISTA.length; i++) {
    txt += `<tr>
            <td>${TERMEKLISTA[i].termek}</td><td>${TERMEKLISTA[i].ar}</td><td>${TERMEKLISTA[i].darab}</td><td><img src="${TERMEKLISTA[i].kep}" class="adminkep"></td><td>${TERMEKLISTA[i].leiras}</td><td><button class="jobboldal" id="${i}" onclick="deleteterlist(event)">X</button></td>
            </tr>`;
  }
  txt += `</table>`;

  txt += `<div class="container mt-3">
  <h2>Feltöltés</h2>
  <form action="/action_page.php">
    <div class="mb-3 mt-3">
      <label for="termek">Termék neve:</label>
      <input type="text" class="form-control" id="termek" placeholder="termék" name="termek">
    </div>
    <div class="mb-3 mt-3">
      <label for="ar">ár:</label>
      <input type="text" class="form-control" id="ar" placeholder="ár" name="ar">
    </div>
    <div class="mb-3 mt-3">
      <label for="darab">darab:</label>
      <input type="text" class="form-control" id="darab" placeholder="darab" name="darab">
    </div>
    <div class="mb-3">
      <label for="kep">kép:</label>
      <input type="text" class="form-control" id="kep" placeholder="kép" name="kep">
    </div>
    <div class="mb-3">
      <label for="leiras">leírás:</label>
      <input type="text" class="form-control" id="leiras" placeholder="leirás" name="leiras">
    </div>
    <div class="form-check mb-3">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>`;

  return txt;
}
