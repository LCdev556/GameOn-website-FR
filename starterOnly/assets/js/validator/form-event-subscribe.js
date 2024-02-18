/**
 * recuperation des elements DOM du formulaire
 */

const firstnameTag = document.getElementById('first');
const lastnameTag = document.getElementById('last');
const emailTag = document.getElementById('email');
const birthdateTag = document.getElementById('birthdate');
const quantityTag = document.getElementById('quantity');
const locationInputList = document.getElementsByName('location');
const conditionTag = document.getElementById('checkbox1');
const locationTag = document.getElementById('location1');


/**
 * Verification champs d'entrée du formulaire
 */


/**
 * 
 * @param {string} firstnameValue Valeur du prenom entrée dans le formulaire
 * @returns {boolean}
 */
export function isValidFirstname(firstnameValue) {
  const firstNameContainer = firstnameTag.parentNode;
  if (firstnameValue >= 2) {
    firstNameContainer.setAttribute('data-error-visible', 'false');
    
    return true;
    
  }
  firstNameContainer.setAttribute('data-error-visible', 'true');
  
};


/**
 * 
 * @param {string} lastnameValue Valeur du nom de famille entrée dans le formulaire
 * @returns {boolean}
 */
export function isValidLastname(lastnameValue) {
  const lastNameContainer = lastnameTag.parentNode;

  if (lastnameValue >= 2) {
    lastNameContainer.setAttribute('data-error-visible', 'false');
    return true;
  }

  lastNameContainer.setAttribute('data-error-visible', 'true');
  
}

/**
 * 
 * @param {string} emailValue Valeur de l'email entrée dans le formulaire
 * @returns {boolean}
 */
export function isValidEmail(emailValue) {
  const emailContainer = emailTag.parentNode;
  if ((new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")).test(emailValue)) {
    emailContainer.setAttribute('data-error-visible', 'false');
    return true;
  };
  emailContainer.setAttribute('data-error-visible', 'true');
}

/**
 * 
 * @param {string} birthdateValue Valeur de la date de naissance entrée dans le formulaire 
 * @returns {boolean}
 */ 
export function isValidBirthdate(birthdateValue) {
  const birthdateContainer = birthdateTag.parentNode;
  if ((new RegExp("\\d{4}\-\\d{2}\-\\d{2}")).test(birthdateValue)){
    birthdateContainer.setAttribute('data-error-visible', 'false');
    return true;
  }
  birthdateContainer.setAttribute('data-error-visible', 'true');
}

/**
 * 
 * @param {number} quantityValue nombre de tournois auquels l'utilisateur a participé 
 * @returns {boolean}
 */
export function isValidQantity(quantityValue) 
{
  const quantityContainer = quantityTag.parentNode;
    if (Number.isInteger(parseInt (quantityValue))) {
      quantityContainer.setAttribute('data-error-visible', 'false');
      return true;
    }
    quantityContainer.setAttribute('data-error-visible', 'true');
}

/**
 * verification de la selection d'un lieux 
 * @returns {boolean}
 */
export function isValidLocation()
{
  const locationContainer = locationTag.parentNode;
    for (let i = 0; i < locationInputList.length; i++) {
      if (locationInputList[i].checked) {
        locationContainer.setAttribute('data-error-visible', 'false');
        return true;
      }
    }
    locationContainer.setAttribute('data-error-visible', 'true');
    
}

/**
 * fonction de verification des conditions d'utilisation
 * @returns {boolean}
 */ 
export function isValidGCU()
{
  const conditionContainer = conditionTag.parentNode;

  if (conditionTag.checked) {
    conditionContainer.setAttribute('data-error-visible', 'false');

    return true;
  }
  conditionContainer.setAttribute('data-error-visible', 'true');
  
}

/**
 * @returns {boolean}
 */
export function isAllFieldsValid()
{
  return isValidFirstname(firstnameTag.value.length) + isValidLastname(lastnameTag.value.length) + isValidEmail(emailTag.value) + isValidBirthdate(birthdateTag.value) + isValidQantity(quantityTag.value) + isValidLocation() + isValidGCU();
} 
