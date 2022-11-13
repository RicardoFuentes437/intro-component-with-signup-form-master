let form = document.querySelector('form');
let fnMessage = document.querySelector('.fn-message');
let lnMessage = document.querySelector('.ln-message');
let eMessage = document.querySelector('.e-message');
let pMessage = document.querySelector('.p-message');
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

form.addEventListener('submit', function(event){
    event.preventDefault();
    var trialForm = new FormData(form);
    var fnInput = trialForm.get('first-name-input');
    var lnInput = trialForm.get('last-name-input');
    var eInput = trialForm.get('email-input');
    var pInput = trialForm.get('password-input');

    if(!fnInput){
        fnMessage.style.opacity = 1;
    }

    if(!lnInput){
        lnMessage.style.opacity = 1;
    }

    if(regex.test(eInput) == false || !eInput){
        eMessage.style.opacity = 1;
    }

    if(!pInput){
        pMessage.style.opacity = 1;
    }

})