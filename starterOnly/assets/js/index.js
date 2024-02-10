
/**gestion ouverture/ fermeture de la modal */

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");



import { launchModal, closeModal, } from './modal/modal.js'

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeBtn.addEventListener("click", closeModal);




/**firstnameTag.addEventListener('focusout', (event) => {
    validateFirstnameInput();
});
*/