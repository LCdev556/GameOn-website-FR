import { launchModal, closeModal, formElementsErase, validationMessageDisplay } from './modal/modal.js';
import { isValidFirstname, isValidLastname, isValidEmail, isValidBirthdate, isValidQantity, isValidGCU, isValidLocation } from './validator/form-event-subscribe.js';

/**
 * recuperation elements DOM du formulaire
 */
const firstnameTag = document.getElementById('first');
const lastnameTag = document.getElementById('last');
const emailTag = document.getElementById('email');
const birthdateTag = document.getElementById('birthdate');
const quantityTag = document.getElementById('quantity');
const locationInputList = document.getElementsByName('location');
const conditionTag = document.getElementById('checkbox1');
const form = document.querySelector('form');

/**
 * recuperation elements DOM de la modal
 */
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");


/**
 * gestion ouverture/ fermeture de la modal 
*/

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeBtn.addEventListener("click", closeModal);

/** 
 * gestion  champs formulaire
*/

//appel de la fonction de validation du prenom
firstnameTag.addEventListener('focusout', (event) => {
    isValidFirstname(firstnameTag.value.length);
});

//appel de la fonction de validation de nom
lastnameTag.addEventListener('focusout', (event) => {
  isValidLastname(lastnameTag.value.length);
});

//appel de la fonction de validation de l'email
emailTag.addEventListener("focusout", (event) => {
  isValidEmail(emailTag.value)
});

//appel de la fonction de validation de la date de naissance 
birthdateTag.addEventListener("focusout", (event) => {
  isValidBirthdate(birthdateTag.value)
});

//appel de la fonction de validation de la quantitée de tournois auxquels l'utilisateur a participé
quantityTag.addEventListener("focusout", (event) => {
  isValidQantity(quantityTag.value)
});

//appel de la fonction de verification de la selection d'un lieux 
for (let i = 0; i < locationInputList.length; i++) {
  locationInputList[i].addEventListener("change", (event) => {
    isValidLocation()
  }
)};

//appel de la fonction de verification de l'acceptation des conditions d'utilisation
conditionTag.addEventListener("change", (event) => {
  // On pourrait renommer en isValidGeneralTermsOfUse()
  isValidGCU()
});

/**
 * validation du formulaire 
 */

form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();

  //on vérifie a nouveau chaque champ du formulaire 
  var validFirstname = isValidFirstname(firstnameTag.value.length);
  var validLastname = isValidLastname(lastnameTag.value.length);
  var validEmail = isValidEmail(emailTag.value);
  var validBirthdate = isValidBirthdate(birthdateTag.value);
  var validQuantity = isValidQantity(quantityTag.value);
  var validLocation = isValidLocation();
  var validGCU = isValidGCU();

  //affichage du message de validation si tous les valeurs entrée sont correctes
  if(validFirstname + validLastname + validEmail + validBirthdate + validQuantity + validLocation + validGCU) {
    
    formElementsErase();
    validationMessageDisplay();
    
    submitBtn.addEventListener("click", closeModal)
    

}    
})
