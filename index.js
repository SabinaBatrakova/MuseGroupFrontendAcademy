const inputNode = document.querySelector('.js-input-email');
const buttonInputEmail = document.querySelector('.js-btn-email');

inputNode.addEventListener('input', onInput);

const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

function onInput() {
  if (checkEmail(inputNode.value)) {
    inputNode.style.borderColor = 'green';
  } else {
    inputNode.style.borderColor = 'red';
  }
}

inputNode.addEventListener('input', onInput);

function checkEmail(value) {
return EMAIL_REGEXP.test(value);
}


buttonInputEmail.addEventListener('click', function(event) {
    event.preventDefault();
    const email = buttonInputEmail.value;
    if (checkEmail(email)) {
        alert('Welcome to the team!');
    } else {
        alert('Email is invalid');
    }
});


inputNode.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const email = inputNode.value;
        if (checkEmail(email)) {
            alert('Welcome to the team!');
        } else {
            alert('Email is invalid');
        }
    }
});