//METTO I BUTTON GENERA E ANNULLA IN UNA VARIABILE
var genera = document.getElementById("genera");
var annulla = document.getElementById("annulla");
//METTO LA SEZIONE BIGLIETTO IN UNA VARIABILE
var displayNone = document.getElementById("displayNone");

genera.addEventListener("click",
function() {

//METTO IN DISPLAY BLOCK QUANDO SI CLICCA SU GENERA
  displayNone.style.display = "block";

//PRENDO IL VALORE DALL'INPUT NOME ETA E KM
  var nome = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var eta = document.getElementById("eta").value;

  //STAMPO NEL CAMPO NOME PASSEGGERO IL NOME INSERITO DALL'UTENTE
  document.getElementById('nome-passeggero').innerHTML = nome;

//DEFINISCO L'OFFERTA IN BASE ALL'ETA' DELL'UTENTE
  var prezzobiglietto = document.getElementById("prezzo-biglietto");
  var prezzoxkm = km * 0.21;
  var sconto = document.getElementById('sconto');
  if (eta == "minorenne") {
    sconto.innerHTML = "Sconto minorenni";
  } else if (eta == "over65") {
    sconto.innerHTML = "Prezzo silver";
  } else {
    sconto.innerHTML = "Prezzo standard";
  }
  //GENERO UN NUMERO CASUALE DELLA CARROZZA
  var carrozza = document.getElementById("carrozza");
  carrozza.innerHTML = Math.floor(Math.random() * 9) + 1;

  //GENERO UN NUMERO CASUALE DEL CAMBIO PRENOTAZIONE
  var prenotazione = document.getElementById("prenotazione");
  prenotazione.innerHTML = Math.floor(Math.random() * 9999) + 90000;

  //CALCOLO IL PREZZO DEL BIGLIETTO IN BASE AI KM E ALL'ETA
  var prezzobiglietto = document.getElementById("prezzoBiglietto");
  if ( eta == "minorenne") {
    prezzobiglietto.innerHTML = ((prezzoxkm - ((prezzoxkm * 20) / 100))).toFixed(2);
  } else if ( eta == "over65") {
    prezzobiglietto.innerHTML = ((prezzoxkm - ((prezzoxkm * 40) / 100))).toFixed(2);
  } else {
    prezzobiglietto.innerHTML = prezzoxkm.toFixed(2);
  }
}
);

//METTO IN DISPLAY BLOCK QUANDO SI CLICCA SU ANNULLA
annulla.addEventListener("click",
function() {
  displayNone.style.display = "none";
}
);
