const firstnameTag = document.getElementById('first');
const lastnameTag = document.getElementById('last');
const emailTag = document.getElementById('email');
const birthdateTag = document.getElementById('birthdate');
const quantityTag = document.getElementById('quantity');
const locationInputList = document.getElementsByName('location');
const conditionTag = document.getElementById('checkbox1');
const locationTag = document.getElementById('location1');
const form = document.querySelector('form')


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

import {isValidFirstname, isValidLastname, isValidEmail, isValidBirthdate, isValidQantity, isValideCondition, isValideLocation } from './validator/form-event-subscribe.js'

firstnameTag.addEventListener('focusout', (event) => {
    isValidFirstname(firstnameTag.value.length);
});

lastnameTag.addEventListener('focusout', (event) => {
  isValidLastname(lastnameTag.value.length);
});

emailTag.addEventListener("focusout", (event) => {
  isValidEmail(emailTag.value)
});

birthdateTag.addEventListener("focusout", (event) => {
  isValidBirthdate(birthdateTag.value)
});

quantityTag.addEventListener("focusout", (event) => {
  isValidQantity(quantityTag.value)
});

conditionTag.addEventListener("change", (event) => {
  isValideCondition()
});

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

  if(isValidFirstname(firstnameTag.value.length) + isValidLastname(lastnameTag.value.length) 
  + isValidEmail(emailTag.value) + isValidBirthdate(birthdateTag.value) 
  + isValidQantity(quantityTag.value) + conditionTag.checked ) {
    
    formInputSuppresion();
    submitBtnMod();
    formTextSuppresion();
    validationTextDisplay();

    submitBtn.addEventListener("click", closeModal)

}
    
});

