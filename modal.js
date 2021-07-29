function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
let firstisvalid = false;
let lastisvalid = false;
let emailisvalid = false;
let birthdateisvalid = false;
let quantityisvalid = false;
let checkedisvalid = false;
const modalcg = document.querySelector(".congratulation");




// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// fermer la fenetre
function fermer() {
  modalbg.style.display = "none";
}
// valider le prenom
reserve.first.addEventListener ("change", veriffirst);
function veriffirst () {
  var inputfirst = document.getElementById("first").value;
  expfirst = /^[A-Za-z-]{2,20}$/;
  console.log(firstisvalid);
  document.getElementById("prenom").textContent = "";
  prenom.style.color = "black";
  prenom.style.fontSize = "15px";
  first.style.border = "0px solid red";
  if (expfirst.test(inputfirst)) {
    firstisvalid = true;
  }
  else {
    document.getElementById("prenom").textContent = "Veuillez entrer un prénom valide";
    prenom.style.color = "red";
    prenom.style.fontSize = "15px";
    first.style.border = "2px solid red";
    firstisvalid = false;
  }
};

// valider le nom
reserve.last.addEventListener ("change", veriflast);
function veriflast() {
  var inputlast = document.getElementById("last").value;
  explast = /^[A-Za-z-]{2,20}$/;
  document.getElementById("nom").textContent = "";
  nom.style.color = "black";
  nom.style.fontSize = "15px";
  last.style.border = "0px solid red";
  if (explast.test(inputlast)) {
    lastisvalid = true;
  }
  else {
    document.getElementById("nom").textContent = "Veuillez entrer un nom valide";
    nom.style.color = "red";
    nom.style.fontSize = "15px";
    last.style.border = "2px solid red";
    lastisvalid = false;
  }
};
// valider l'email
reserve.email.addEventListener ("change", verifemail);
function verifemail() {
  var inputemail = document.getElementById("email").value;
  expemail = /^([a-zA-Z0-9]+(([\.\-\_]?[a-zA-Z0-9]+)+)?)\@(([a-zA-Z0-9]+[\.\-\_])+[a-zA-Z]{2,4})$/;
  document.getElementById("courriel").textContent = "";
  courriel.style.color = "black";
  courriel.style.fontSize = "15px";
  email.style.border = "0px solid red";
  if (expemail.test(inputemail)) {
    emailisvalid = true;
  }
  else {
    document.getElementById("courriel").textContent = "Veuillez entrer un email valide";
    courriel.style.color = "red";
    courriel.style.fontSize = "15px";
    email.style.border = "2px solid red";
    emailisvalid = false;
  }
};
// valider la date de naissance
reserve.birthdate.addEventListener ("change", verifbirthdate);
function verifbirthdate() {
  var inputbirthdate = document.getElementById("birthdate").value;
  expbirthdate = /^\d{4}-\d\d-\d\d$/;
  document.getElementById("date").textContent = "";
  date.style.color = "black";
  date.style.fontSize = "15px";
  birthdate.style.border = "0px solid red";
  if (expbirthdate.test(inputbirthdate)) {
    birthdateisvalid = true;
  }
  else {
    document.getElementById("date").textContent = "Veuillez entrer une date valide";
    date.style.color = "red";
    date.style.fontSize = "15px";
    birthdate.style.border = "2px solid red";
    birthdateisvalid = false;
  }
};
// valider la quantité
reserve.quantity.addEventListener ("change", verifquantity);
function verifquantity() {
  var inputquantity = document.getElementById("quantity").value;
  expquantity = /^[0-9]{1,2}$/;
  document.getElementById("quantite").textContent = "";
  quantite.style.color = "black";
  quantite.style.fontSize = "15px";
  quantity.style.border = "0px solid red";
  if (expquantity.test(inputquantity)) {
    quantityisvalid = true;
  }
  else {
    document.getElementById("quantite").textContent = "Veuillez entrer un nombre valide";
    quantite.style.color = "red";
    quantite.style.fontSize = "15px";
    quantity.style.border = "2px solid red";
    quantityisvalid = false;
  }
};
// valider le check
function verifcheck() {
 document.getElementById("coche").textContent = "";
 coche.style.color = "black";
 coche.style.fontSize = "15px";
 if ((quantity.value==0)
    &&(!document.querySelector('input[name=location]:checked'))
    &&(document.querySelector('input[name=cond]:checked'))) {
    checkedisvalid = true;
  }
  if ((quantity.value>0)
    &&(document.querySelector('input[name=location]:checked'))
    &&(document.querySelector('input[name=cond]:checked'))) {
    checkedisvalid = true;
  }
 else {
    document.getElementById("coche").textContent = "Veuillez bien cocher";
    coche.style.color = "red";
    coche.style.fontSize = "15px";
    checkedisvalid = false;
  }
};

// valider le formulaire
function validate() {
  veriffirst();
  veriflast();
  verifemail();
  verifbirthdate();
  verifquantity();
  verifcheck()
  if ((firstisvalid)&&(lastisvalid)&&(emailisvalid)&&(birthdateisvalid)&&(quantityisvalid)&&(checkedisvalid)) {
    
    modalbg.style.display = "none";
    modalcg.style.display = "block";
    return false
  }
  else {
    return false
  }
};
// fermer fenetre congratulation
function croix() {
  modalcg.style.display = "none";
};


