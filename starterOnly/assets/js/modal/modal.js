export function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
import { modalbg, modalBtn, formData, closeBtn } from "./modal-dom-elements";

// launch modal form
 export function launchModal() {
  modalbg.style.display = "block";
}

//close modal form
 export function closeModal() {
  modalbg.style.display = "none";
}







