
  var linkpage;
  var Randomarlinki = new Array();
  var RandomarlinkiAll = new Array();
  var strandom = null;
  var stskip = null;





for (vrstica = 0; vrstica < arlinki.length; vrstica++) {
    obstaja = 0;

    arlinki[vrstica][2] = arlinki[vrstica][2].replace('👢', '<img src="https://www.prettybarngood.com/favicon.ico" style="height:1em; vertical-align:middle;">&nbsp');


    for (rvrstica = 0; rvrstica < Randomarlinki.length; rvrstica++) {
      if (Randomarlinki[rvrstica] == arlinki[vrstica][0])
        obstaja = 1;
    }

    if (obstaja == 0) {
      Randomarlinki[Randomarlinki.length] = arlinki[vrstica][0];
      RandomarlinkiAll[RandomarlinkiAll.length] = arlinki[vrstica][0];
    }


  }



 strandom = Randomarlinki.length + 1;
 stskip = 0;


function utfToHex(str) {
    const bytes = new TextEncoder().encode(str);
    return Array.from(bytes)
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}


function hexToUtf(hex) {
    if (hex.length % 2 !== 0) {
        throw new Error("Neveljaven HEX niz");
    }

    const bytes = new Uint8Array(
        hex.match(/.{1,2}/g).map(byte => parseInt(byte, 16))
    );

    return new TextDecoder().decode(bytes);
}






  function gFrameNav(arlinkliID) {
    linkpage = window.open(arlinki[arlinkliID][1], null, '');
  }



