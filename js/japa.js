var urli = null;
var timerx = null;

//kreiranje liste
var zdruziActive = false;
var stStari = 5;
var stNovi = 5;
var novoRange = null;
var novoNumber = null;
var zdruziIcon = null;
var KreSezOsvAkt = 0





function KreSezOsv(pOBJID, stS, stN) {

  if (KreSezOsvAkt == 1) {
    KreSezOsvAkt = 0;
    StPlesov = RandomarlinkiAll.length;
    maxS = 0;
    maxN = 0;


    if (pOBJID == 'zdruziIcon')
      zdruziActive ^= 1;


    if (pOBJID == 'stariRange')
      stStari = parseInt(document.getElementById("stariRange").value, 10);
    if (pOBJID == 'stariNumber')
      stStari = parseInt(document.getElementById("stariNumber").value, 10);
    if (pOBJID == 'novoRange')
      stNovi = parseInt(document.getElementById("novoRange").value, 10);
    if (pOBJID == 'novoNumber')
      stNovi = parseInt(document.getElementById("novoNumber").value, 10);

    if (pOBJID == 'init') {
      stStari = stS;
      stNovi = stN;

      document.getElementById("stariNumber").max = StPlesov
      document.getElementById("novoNumber").max = StPlesov;

    }

    document.getElementById("stariRange").max = StPlesov;
    document.getElementById("novoRange").max = StPlesov;

    if (pOBJID == 'stariRange' || pOBJID == 'stariNumber')
    {
      if (stStari > StPlesov)
        stStari = StPlesov;
      if (stStari + stNovi > StPlesov)
        stNovi = StPlesov - stStari;
    }


    if (stNovi > StPlesov)
      stNovi = StPlesov;

    if (stStari + stNovi > StPlesov)
      stStari = StPlesov - stNovi

    if (stStari + stNovi == 0)
    stNovi=1;  


    maxN = stNovi + 5;
    /*
    if (maxN > StPlesov)
      maxN = StPlesov;
    */

    
    maxS = stStari + 5;
    /*
    if (maxS > StPlesov - stNovi)
      maxS = StPlesov - stNovi;
    */



    document.getElementById("stariRange").max = maxS;
    document.getElementById("novoRange").max = maxN;



    document.getElementById("stariRange").value = stStari;
    document.getElementById("stariNumber").value = stStari;
    document.getElementById("novoRange").value = stNovi;
    document.getElementById("novoNumber").value = stNovi;






    if (zdruziActive) {
      document.getElementById("zdruziIcon").className = "bi bi-check-circle-fill text-light fs-4";
    } else {
      document.getElementById("zdruziIcon").className = "bi bi-circle text-secondary fs-4";
    }


    KreSezOsvAkt = 1;
  }
}

function nalozi_body(par0) {
  if (par0 == 'home') {

    strtmp = '';
    PlesiSt = 0
    oldidp = '';
    zakljuci = 0;

    strtmp = `
<div class="container-fluid">
  <div class="row g-2">
    `;

    for (vrstica = 0; vrstica < arlinki.length; vrstica++) {



      if (oldidp != arlinki[vrstica][0]) {
        if (zakljuci == 1) {
          zakljuci = 0;
          //add zaključek
          strtmp = strtmp + `
        </div>
      </div>
    </div>
     `;

        }


        oldidp = arlinki[vrstica][0];
        PlesiSt++;
        strPlesiSt = String(PlesiSt) + '.';

        zakljuci = 1;

        //add header
        strtmp = strtmp + `
     <div class="col-md-4 bg-dark text-light">
      <div class="card shadow-sm rounded-2 p-1 h-100 bg-dark text-light">
        <div class="fs-7 fw-bold bg-dark text-light">${PlesiSt}</div>
        <div class="text-muted">
     `;

      }

      arlinki[vrstica][20] = PlesiSt;
      //add line
      strtmp = strtmp + `
<p class="m-0 lh-base d-flex flex-column align-items-center bg-dark text-light" onclick="gFrameNav(${vrstica})">
  <span class="fs-3 fw-bold">${arlinki[vrstica][2]}</span>
  <span class="fs-7">${arlinki[vrstica][3]}</span>
</p>
`;



    }

    if (zakljuci == 1) {
      zakljuci = 0;
      //add zaključek
      strtmp = strtmp + `
        </div>
      </div>
    </div>
     `;
    }


    strtmp = strtmp + `
      </div>
    </div>
  `;



    document.getElementById('bodydiv').innerHTML = strtmp;

    return 1
  }


  if (par0 == 'about') {
    document.getElementById('bodydiv').innerHTML = `
<div class="container-fluid">
  <div class="row g-2"> <!-- malo razmaka med stolpci -->

    <div class="col-md-4">
      <div class="card shadow-sm rounded-2 p-1 h-100">
        <div class="fs-4 fw-bold text-primary mb-1">01</div>
        <div class="text-muted">
          <p class="m-0 lh-base">Prva vrstica besedila.</p>
          <p class="m-0 lh-base">Druga vrstica besedila.</p>
          <p class="m-0 lh-base">Tretja vrstica.</p>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card shadow-sm rounded-2 p-1 h-100">
        <div class="fs-4 fw-bold text-primary mb-1">02</div>
        <div class="text-muted">
          Prva vrstica besedila.<br>
          Druga vrstica besedila.<br>
          Tretja vrstica.
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card shadow-sm rounded-2 p-1 h-100">
        <div class="fs-4 fw-bold text-primary mb-1">03</div>
        <div class="text-muted">
          Prva vrstica besedila.<br>
          Druga vrstica besedila.<br>
          Tretja vrstica.
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card shadow-sm rounded-2 p-1 h-100">
        <div class="fs-4 fw-bold text-primary mb-1">03</div>
        <div class="text-muted">
          Prva vrstica besedila.<br>
          Druga vrstica besedila.<br>
          Tretja vrstica.
        </div>
      </div>
    </div>

  </div>
</div>
`;
    return 1
  }


  

  if (par0 === 'predvajajSeznam') {
      document.getElementById('bodydiv').innerHTML = `to je play`
   }



   
  if (par0 == 'services') {


    if (urli !== null) {
      urli.close();
      urli = null;
    }



    urli = window.open('https://www.youtube.com/watch?v=IYd1-cPwQCk', '_blank');
    document.getElementById('bodydiv').innerHTML = `
-->: https://www.youtube.com/watch?v=IYd1-cPwQCk
`;



    /*
    if (timerx) clearInterval(timerx);
    
        timerx = setInterval(() => {
            if (urli.closed) {
                clearInterval(timerx); // ustavi interval
                alert('Tab se je zaprl');
            }
        }, 1000);
    */

    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) {
        alert("Uporabnik nazaj na main page");
      }
      if (document.hidden) {
        alert("Uporabnik zapustil na main page");
      }
    });


    return 1
  }


  if (par0 == 'UstvariSeznam') {
    document.getElementById('bodydiv').innerHTML = `
<div class="container">

  <!-- STARI -->
  <div data-bs-theme="dark" class="mb-4">
    <label class="form-label">Stari</label>
    <div class="row align-items-center">
      <div class="col">
        <input type="range" class="form-range" id="stariRange" min="0" max="100" value="50" onchange="KreSezOsv('stariRange')">
      </div>
      <div class="col-3">
        <input type="number" class="form-control bg-dark text-light border-light"
               id="stariNumber" min="0" max="100" value="0" onchange="KreSezOsv('stariNumber')">
      </div>
    </div>
  </div>

  <!-- ZDRUŽI (custom icon checkbox) -->
  <div class="mb-4">
    <div class="d-flex align-items-center gap-2" style="cursor:pointer;" onclick="KreSezOsv('zdruziIcon')">
      <i id="zdruziIcon" class="bi bi-circle text-secondary fs-4"></i>
      <span>združi</span>
    </div>
  </div>

  <!-- NOVO -->
  <div data-bs-theme="dark" class="mb-4">
    <label class="form-label">Novo</label>
    <div class="row align-items-center">
      <div class="col">
        <input type="range" class="form-range"  id="novoRange" min="0" max="100" value="50" onchange="KreSezOsv('novoRange')" >
      </div>
      <div class="col-3">
        <input type="number" class="form-control bg-dark text-light border-light"
               id="novoNumber" min="0" max="100" value="0" onchange="KreSezOsv('novoNumber')">
      </div>
    </div>
  </div>

<a href="#" class="btn-img">
  <img src="img/kocka.gif" alt="Start" class="btn-img-inner black-style">
</a>



</div>
    `;

    KreSezOsvAkt = 1;
    KreSezOsv('');


    /*
    zdruziActive = false;
    stariRange = document.getElementById("stariRange");
    stariNumber = document.getElementById("stariNumber");
    novoRange = document.getElementById("novoRange");
    novoNumber = document.getElementById("novoNumber");
    zdruziIcon = document.getElementById("zdruziIcon");
    
    function toggleZdruzi() {
       zdruziActive ^= 1;
    
      if (zdruziActive) {
        zdruziIcon.className = "bi bi-check-circle-fill text-success fs-4";
      } else {
        zdruziIcon.className = "bi bi-circle text-secondary fs-4";
      }
    }
    
    function syncPair(range, number, otherRange, otherNumber) {
      range.addEventListener("input", () => {
        number.value = range.value;
    
        if (zdruziActive) {
          otherRange.value = range.value;
          otherNumber.value = range.value;
        }
      });
    
      number.addEventListener("input", () => {
        range.value = number.value;
    
        if (zdruziActive) {
          otherRange.value = number.value;
          otherNumber.value = number.value;
        }
      });
    }
    
    syncPair(stariRange, stariNumber, novoRange, novoNumber);
    syncPair(novoRange, novoNumber, stariRange, stariNumber);  
    toggleZdruzi(); 
    
    
    */


    return 1
  }


































  return 0
}