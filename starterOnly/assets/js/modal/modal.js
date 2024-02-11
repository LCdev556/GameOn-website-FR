// DOM Elements

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

// DOM Elements

// launch modal form
 export function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
 export function closeModal() {
  modalbg.style.display = "none";
}

export function formInputSuppresion(){
  for (let i = 0; i < formLabel.length; i++){
    formLabel[i].style.opacity = "0";
  }
  for (let i = 0; i < formInput.length; i++){
    formInput[i].style.opacity = "0";
}
}

export function submitBtnMod(){
 submitBtn.setAttribute("value", "c'est partie");
}

export function formTextSuppresion(){
  formText.style.opacity = "0"
}

export function validationTextDisplay() {
  formValidationMessage.style.display = "block"
}







