const enter = document.querySelector("#enter");
const emailInputLogin = document.querySelector("#signInEmail");
const passwordInputLogin = document.querySelector("#signInPassword");

const signInMethod = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(response) {
        window.location = `index.html?id=${response.user.uid}`;
    }).catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
    });
}

const signIn = (e) => {
    e.preventDefault();
    const email = emailInputLogin.value;
    const password = passwordInputLogin.value;
    signInMethod(email, password);
}

enter.addEventListener('click', signIn);