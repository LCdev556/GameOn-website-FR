/**
 * recuperation des elements DOM de la modal
 */

const modalbg = document.querySelector(".bground");
const submitBtn = document.querySelector(".btn-submit");
const formInput = document.querySelectorAll(".text-control, .checkbox-input")
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
export function formElementsErase() {
  for (let i = 0; i < formInput.length; i++) {
    formInput[i].parentNode.style.opacity = "0";
  }

  formText.style.opacity = "0";
}

//modification du bouton de validation du formulaire 
export function validationMessageDisplay() {
 submitBtn.setAttribute("value", "C'est parti !");
 formValidationMessage.style.display = "block";
}


