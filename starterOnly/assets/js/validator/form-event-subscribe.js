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
const form = document.querySelector('form')


/**
 * Verification champs d'entrée du formulaire
 */

//fonction verification du prenom
export function isValidFirstname(firstnameValue) {
  const firstNameContainer = firstnameTag.parentNode;
  if (firstnameValue >= 2) {
    firstNameContainer.setAttribute('data-error-visible', 'false');
    return true;
    
  }
  firstNameContainer.setAttribute('data-error-visible', 'true');
  return false;
};

//fonction de verification du nom
export function isValidLastname(lastnameValue) {
  const lastNameContainer = lastnameTag.parentNode;

  if (lastnameValue >= 2) {
    lastNameContainer.setAttribute('data-error-visible', 'false');
    return true;
  }

  lastNameContainer.setAttribute('data-error-visible', 'true');
  return false;
}

//fonction de verifiction de l'email
export function isValidEmail(emailValue) {
  const emailContainer = emailTag.parentNode;
  if ((new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")).test(emailValue)) {
    emailContainer.setAttribute('data-error-visible', 'false');
    return true;
  };
  emailContainer.setAttribute('data-error-visible', 'true');
}

//fonction de verification de la date de naissance 
export function isValidBirthdate(birthdateValue) {
  const birthdateContainer = birthdateTag.parentNode;
  if ((new RegExp("\\d{4}\-\\d{2}\-\\d{2}")).test(birthdateValue)){
    birthdateContainer.setAttribute('data-error-visible', 'false');
    return true;
  }
  birthdateContainer.setAttribute('data-error-visible', 'true');
}

//fonction de verification de la quantitée de tournois auxquels l'utilisateur a participé
export function isValidQantity(quantityValue) 
{
  const quantityContainer = quantityTag.parentNode;
    if (Number.isInteger(parseInt (quantityValue))) {
      quantityContainer.setAttribute('data-error-visible', 'false');
      return true;
    }
    quantityContainer.setAttribute('data-error-visible', 'true');
}

//verification de la selection d'un lieux 
export function isValideLocation()
{
  const locationContainer = locationTag.parentNode;
    for (let i = 0; i < locationInputList.length; i++) {
      if (locationInputList[i].checked) {
        locationContainer.setAttribute('data-error-visible', 'false');
        return true;
      }
    }
    locationContainer.setAttribute('data-error-visible', 'true');
    return false;
}

//fonction de verification des conditions d'utilisation 
export function isValideCondition()
{
  const conditionContainer = conditionTag.parentNode;
  if (conditionTag.checked) {
    conditionContainer.setAttribute('data-error-visible', 'false');
    return true;
  } else {
    conditionContainer.setAttribute('data-error-visible', 'true');
  }

}





