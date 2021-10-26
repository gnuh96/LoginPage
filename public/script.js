const loginForm = document.getElementById("form-login");
const loginSubmit = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginReset = document.getElementById("login-form-reset");

loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        // location.reload();
    } else {
        alert("Invalid username and/or password");
        //location.reload();
    }
})

loginReset.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
})