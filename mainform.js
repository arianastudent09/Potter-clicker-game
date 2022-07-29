const Form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('passwordRepeat');

document.getElementById("myButtonPlay").onclick = function () {
        location.href = "index.html";
    };

Form.addEventListener('submit', check => {
    check.preventDefault();

    validateInputs();
});

const findAnError = (element, feedback) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = feedback;
    inputControl.classList.add('error');
    inputControl.classList.remove('')
}

const findAnAnswer = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordRepeatValue = passwordRepeat.value.trim();

    if(usernameValue === '') {
        findAnError(username, '*');
    } else {
        findAnAnswer(username);
    }

    if(emailValue === '') {
        findAnError(email, '*');
    } else if (!isValidEmail(emailValue)) {
        findAnError(email, '*');
    } else {
        findAnAnswer(email);
    }

    if(passwordValue === '') {
        findAnError(password, '*');
    } else if (passwordValue.length < 8 ) {
        findAnError(password, '*')
    } else {
        findAnAnswer(password);
    }

    if(passwordRepeatValue === '') {
        findAnError(passwordRepeat, '*');
    } else if (passwordRepeatValue !== passwordValue) {
        findAnError(passwordRepeat, "*");
    } else {
        findAnAnswer(passwordRepeat);
    }

};