/**
 * recuperation des elements DOM de la modal
 */

const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");
const formLabel = document.querySelectorAll("label")
const formInput = document.querySelectorAll(".text-control")
const formText = document.querySelector(".text-label")
const formValidationMessage = document.querySelector(".validation-text")


export function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/**
 * ensemble des fonctions pour la fermeture et l'ouverture de la modal
 */

// launch modal form
 export function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
 export function closeModal() {
  modalbg.style.display = "none";
}

/**
 * ensemble des fonction de modification de la modal lors de la validation du formulaire 
 */

//supression label et input du formulaire
export function formInputSuppresion(){
  for (let i = 0; i < formLabel.length; i++){
    formLabel[i].style.opacity = "0";
  }
  for (let i = 0; i < formInput.length; i++){
    formInput[i].style.opacity = "0";
}
}

//modification du bouton de validation du formulaire 
export function submitBtnMod(){
 submitBtn.setAttribute("value", "c'est partie");
}

//suppression du texte 
export function formTextSuppresion(){
  formText.style.opacity = "0"
}

//affichage texte de validation 
export function validationTextDisplay() {
  formValidationMessage.style.display = "block"
}







