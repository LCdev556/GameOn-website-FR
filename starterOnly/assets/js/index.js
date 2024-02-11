
/**
 * gestion ouverture/ fermeture de la modal 
*/

import { modalbg, modalBtn, formData, closeBtn } from "./modal-dom-elements";

import { launchModal, closeModal, } from './modal/modal.js'

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeBtn.addEventListener("click", closeModal);



/** 
 * gestion  champs formulaire
*/

import { firstnameTag, lastnameTag, emailTag, birthdateTag, quantityTag, locationInputList, conditionTag, LocationTag } from './validator/validator-dom-elements';

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

