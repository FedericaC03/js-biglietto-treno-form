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
}
);
