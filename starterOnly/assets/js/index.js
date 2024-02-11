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
const locationTag = document.getElementById('location1');
const form = document.querySelector('form')

/**
 * recuperation elements DOM de la modal
 */

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const formLabel = document.querySelectorAll("label")
const formInput = document.querySelectorAll(".text-control")
const formText = document.querySelector(".text-label")

/**
 * gestion ouverture/ fermeture de la modal 
*/

import { launchModal, closeModal, formInputSuppresion, submitBtnMod, formTextSuppresion, validationTextDisplay } from './modal/modal.js'

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeBtn.addEventListener("click", closeModal);

/** 
 * gestion  champs formulaire
*/

//import des fonctions de validation du formulaire
import {isValidFirstname, isValidLastname, isValidEmail, isValidBirthdate, isValidQantity, isValideCondition, isValideLocation } from './validator/form-event-subscribe.js'

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
    isValideLocation()
  }
)};

//appel de la fonction de verification de l'acceptation des conditions d'utilisation
conditionTag.addEventListener("change", (event) => {
  isValideCondition()
});

/**
 * validation du formulaire 
 */

form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  //on vérifie a nouveau chaque champ du formulaire 
  isValidFirstname(firstnameTag.value.length);
  isValidLastname(lastnameTag.value.length);
  isValidEmail(emailTag.value);
  isValidBirthdate(birthdateTag.value);
  isValidQantity(quantityTag.value);
  isValideCondition();
  isValideLocation();

  //affichage du message de validation si tous les valeurs entrée sont correctes
  if(isValidFirstname(firstnameTag.value.length) + isValidLastname(lastnameTag.value.length) 
  + isValidEmail(emailTag.value) + isValidBirthdate(birthdateTag.value) 
  + isValidQantity(quantityTag.value) + isValideLocation() + conditionTag.checked ) {
    
    formInputSuppresion();
    submitBtnMod();
    formTextSuppresion();
    validationTextDisplay();

    submitBtn.addEventListener("click", closeModal)

}    
})
