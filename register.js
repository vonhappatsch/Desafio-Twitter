const database = firebase.database();
const register = document.querySelector("#register");
const emailInput = document.getElementById("signUpEmail");
const passwordInput = document.getElementById("signUpPassword");

const create = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
    });
}

const createUser = (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    create(email, password);
}

register.addEventListener('click', createUser);

firebase.auth().onAuthStateChanged(user => {
    if (user) window.location = `index.html`
});