//METTO IL BUTTON GENERA IN UNA VARIABILE
var genera = document.getElementById("genera");

//PRENDO IL VALORE DALL'INPUT NOME ETA E KM
//STAMPO NEL CAMPO NOME PASSEGGERO IL NOME INSERITO DALL'UTENTE
genera.addEventListener("click",
function() {
  var nome = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var eta = document.getElementById("eta").value;
  document.getElementById('nome-passeggero').innerHTML = nome;

//DEFINISCO L'OFFERTA IN BASE ALL'ETA' DELL'UTENTE
  var prezzobiglietto = document.getElementById("prezzo-biglietto");
  var prezzoxkm = km * 0.21;
  var sconto = document.getElementById('sconto');
  if (eta == "minorenne") {
    sconto.innerHTML = "sconto minorenni";
  } else if (eta == "over65") {
    sconto.innerHTML = "prezzo silver";
  } else {
    sconto.innerHTML = "prezzo standard";
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
    prezzobiglietto.innerHTML = prezzoxkm;
  }
}
);
