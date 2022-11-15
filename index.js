let form = document.querySelector('form');
let fnMessage = document.querySelector('.fn-message');
let lnMessage = document.querySelector('.ln-message');
let eMessage = document.querySelector('.e-message');
let pMessage = document.querySelector('.p-message');
let firstInput = document.querySelector('.first-name-input');
let lastInput = document.querySelector('.last-name-input');
let emailInput = document.querySelector('.email-input');
let passInput = document.querySelector('.password-input');
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', function(event){
    event.preventDefault();
    var trialForm = new FormData(form);
    var fnInput = trialForm.get('first-name-input');
    var lnInput = trialForm.get('last-name-input');
    var eInput = trialForm.get('email-input');
    var pInput = trialForm.get('password-input');

    if(!fnInput){
        fnMessage.style.opacity = 1;
        firstInput.style.backgroundImage = "url('images/icon-error.svg')";
        firstInput.style.backgroundRepeat = "no-repeat";
        firstInput.style.backgroundPosition = "90% 50%";
    }

    if(!lnInput){
        lnMessage.style.opacity = 1;
        lastInput.style.backgroundImage = "url('images/icon-error.svg')";
        lastInput.style.backgroundRepeat = "no-repeat";
        lastInput.style.backgroundPosition = "90% 50%";
    }

    if(regex.test(eInput) == false || !eInput){
        eMessage.style.opacity = 1;
        emailInput.style.backgroundImage = "url('images/icon-error.svg')";
        emailInput.style.backgroundRepeat = "no-repeat";
        emailInput.style.backgroundPosition = "90% 50%";
    }

    if(!pInput){
        pMessage.style.opacity = 1;
        passInput.style.backgroundImage = "url('images/icon-error.svg')";
        passInput.style.backgroundRepeat = "no-repeat";
        passInput.style.backgroundPosition = "90% 50%";
    }

    if((fnInput.length > 0) && (lnInput.length > 0) && (eInput.length > 0 && regex.test(eInput) != false) && (pInput.length > 0)){
        window.location.reload();
    }
})