//DOM Elements form

const firstnameTag = document.getElementById('first');
const lastnameTag = document.getElementById('last');
const emailTag = document.getElementById('email');
const birthdateTag = document.getElementById('birthdate');
const quantityTag = document.getElementById('quantity');
const locationInputList = document.getElementsByName('location');
const conditionTag = document.getElementById('checkbox1');
const locationTag = document.getElementById('location1');
const form = document.querySelector('form')


//verification valeur balise--------------------------------------------------------------------------------------
// Proposition de nom : isValidFirstname
export function isValidFirstname(firstnameValue) {
  const firstNameContainer = firstnameTag.parentNode;
  if (firstnameValue >= 2) {
    firstNameContainer.setAttribute('data-error-visible', 'false');
    return true;
    
  }
  firstNameContainer.setAttribute('data-error-visible', 'true');
  return false;
}





export function isValidLastname(lastnameValue) {
  const lastNameContainer = lastnameTag.parentNode;

  if (lastnameValue >= 2) {
    lastNameContainer.setAttribute('data-error-visible', 'false');
    return true;
  }

  lastNameContainer.setAttribute('data-error-visible', 'true');
  return false;
}

export function isValidEmail(emailValue) {
  const emailContainer = emailTag.parentNode;
  if ((new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")).test(emailValue)) {
    emailContainer.setAttribute('data-error-visible', 'false');
    return true;
  };
  emailContainer.setAttribute('data-error-visible', 'true');
}

export function isValidBirthdate(birthdateValue) {
  const birthdateContainer = birthdateTag.parentNode;
  if ((new RegExp("\\d{4}\-\\d{2}\-\\d{2}")).test(birthdateValue)){
    birthdateContainer.setAttribute('data-error-visible', 'false');
    return true;
  }
  birthdateContainer.setAttribute('data-error-visible', 'true');
}

export function isValidQantity(quantityValue) 
{
  const quantityContainer = quantityTag.parentNode;
    if (Number.isInteger(parseInt (quantityValue))) {
      quantityContainer.setAttribute('data-error-visible', 'false');
      return true;
    }
    quantityContainer.setAttribute('data-error-visible', 'true');
}

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

export function isValideLocation()
{
  const locationContainer = LocationTag.parentNode;
    for (let i = 0; i < locationInputList.length; i++) {
      if (locationInputList[i].checked) {
        locationContainer.setAttribute('data-error-visible', 'false');
        return true;
      }
    }
    locationContainer.setAttribute('data-error-visible', 'true');
    return false;
}




//validation contenue balise---------------------------------------------------------------------------------------

/** 
firstnameTag.addEventListener("focusout", (event) => {
  const firstNameContainer = firstnameTag.parentNode;
  if (isValidFirstname(firstnameTag.value.length)) {
    firstNameContainer.setAttribute('data-error-visible', 'false');
  } else {
    firstNameContainer.setAttribute('data-error-visible', 'true');
  }
});


lastnameTag.addEventListener("focusout", (event) =>{
    
  isValidLastname(lastnameTag.value.length)
    
});

emailTag.addEventListener("focusout", (event) => {
    const emailContainer = emailTag.parentNode;
  if (isValidEmail(emailTag.value)) {
    emailContainer.setAttribute('data-error-visible', 'false');
  } else {
    emailContainer.setAttribute('data-error-visible', 'true');
  }
});

birthdateTag.addEventListener("focusout", (event) => {
  const birthdateContainer = birthdateTag.parentNode;

  if (isValidBirthdate(birthdateTag.value)) {
    birthdateContainer.setAttribute('data-error-visible', 'false');
  } else {
    birthdateContainer.setAttribute('data-error-visible', 'true');
  }
});

quantityTag.addEventListener("focusout", (event) => {
  const quantityContainer = quantityTag.parentNode;
  if (isValidQantity(quantityTag.value)) {
    quantityContainer.setAttribute('data-error-visible', 'false');
  } else {
    quantityContainer.setAttribute('data-error-visible', 'true');
  }
});


conditionTag.addEventListener("change", (event) => {
  const conditionContainer = conditionTag.parentNode;
  if (conditionTag.checked) {
    conditionContainer.setAttribute('data-error-visible', 'false');
  } else {
    conditionContainer.setAttribute('data-error-visible', 'true');
  }
});



export function displayErrorMessage(baliseReturn, baliseName) {
  if (baliseReturn == true) {
    (baliseName).setAttribute('data-error-visible', 'false');
    console.log('true')
    console.log(baliseReturn)
    return;
  } else {
  (baliseName).setAttribute('data-error-visible', 'false');
  console.log('false')
  }
}
*/

