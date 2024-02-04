//DOM Elements form
const firstnameTag = document.getElementById('first');
const lastnameTag = document.getElementById('last');
const emailTag = document.getElementById('email');
const birthdateTag = document.getElementById('birthdate');
const quantityTag = document.getElementById('quantity');
const locationInputList = document.getElementsByName('location');
const conditionTag = document.getElementById('checkbox1');
const testLocation = document.getElementById('location1')


//prevent default submit event 
const form = document.querySelector('form') 


//verification valeur balise--------------------------------------------------------------------------------------
// Proposition de nom : isValidFirstname
function isValidFirstname(firstnameValue) {
  if (firstnameValue >= 2) {
    return true;
  }
  
  return false;
}

// Nom de famille => lastname
function isValidLastname(lastnameValue) {
  if (lastnameValue >= 2) {
    return true
  }

  return false
}

function isValidEmail(emailValue) {
  return (new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+")).test(emailValue);
}

function isValidBirthdate(birthdateValue) {
  return (new RegExp("\\d{4}\-\\d{2}\-\\d{2}")).test(birthdateValue);
}

function isValidQantity(quantityValue) {
    return (Number.isInteger(parseInt (quantityValue)));
}

var locationVerificationResult = 0;
function locationVerification(){
for (let i = 0; i < locationInputList.length; i++) {
  if (locationInputList[i].checked) {
    locationVerificationResult ++;
    
  
  }if (locationVerificationResult == 0){
    console.log('false')
    return false;
  }
  
  
  console.log('true')
  return true;
}
}




//validation contenue balise---------------------------------------------------------------------------------------

firstnameTag.addEventListener("focusout", (event) => {
  const firstNameContainer = firstnameTag.parentNode;
  if (isValidFirstname(firstnameTag.value.length)) {
    firstNameContainer.setAttribute('data-error-visible', 'false');
  } else {
    firstNameContainer.setAttribute('data-error-visible', 'true');
  }
});

lastnameTag.addEventListener("focusout", (event) =>{
    const lastNameContainer = lastnameTag.parentNode;
  if (isValidLastname(lastnameTag.value.length)) {
    lastNameContainer.setAttribute('data-error-visible', 'false');
  } else {
    lastNameContainer.setAttribute('data-error-visible', 'true');
  }
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





//validation formulaire-----------------------------------------------------------------------------------
form.addEventListener("submit", (event) => {
  // On empêche le comportement par défaut
  event.preventDefault();
  //on vérifie a nouveau chaque champ du formulaire 
  const firstNameContainer = firstnameTag.parentNode;
  if (!isValidFirstname(firstnameTag.value.length)) {
    firstNameContainer.setAttribute('data-error-visible', 'true');
  }
  const lastNameContainer = lastnameTag.parentNode;
  if (!isValidLastname(lastnameTag.value.length)) {
    lastNameContainer.setAttribute('data-error-visible', 'true');
  }
  const emailContainer = emailTag.parentNode;
  if (!isValidEmail(emailTag.value)) {
    emailContainer.setAttribute('data-error-visible', 'true');
  }
  const birthdateContainer = birthdateTag.parentNode;
  if (!isValidBirthdate(birthdateTag.value)) {
    birthdateContainer.setAttribute('data-error-visible', 'true');
  }
  const quantityContainer = quantityTag.parentNode;
  if (!isValidQantity(quantityTag.value)) {
    quantityContainer.setAttribute('data-error-visible', 'true');
  }
  const conditionContainer = conditionTag.parentNode;
  if (!conditionTag.checked) {
    conditionContainer.setAttribute('data-error-visible', 'true');
  }
  const locationContainer = testLocation.parentNode;
  if (locationVerification() == false) {
    locationContainer.setAttribute('data-error-visible', 'true');
  }

  console.log(locationVerificationResult)
  /** 
  if(firstnameVerification(firstnameTag.value.length) + surnameVerification(surnameTag.value.length) 
  + emailVerification(emailTag.value) + birthdateVerification(birthdateTag.value) 
  + quantityVerification(quantityTag.value) + tcTag.checked ) {

  }
  */
    
});
