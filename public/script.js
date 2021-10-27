const loginForm = document.getElementById("form-login");
const loginSubmit = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginReset = document.getElementById("login-form-reset");


loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let data = {
        username: loginForm.username.value,
        password: loginForm.password.value
    };
    
    fetch('http://localhost:8080/login', {
        method: 'post',
        body: data
    }).then(function(response){
        if(response === 'yes') {
            alert("You have successfully logged in.");
        } else {
            alert("Invalid username and/or password");
        }
    }).catch(function(error){
        console.error(error);;
    })
})

loginReset.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
})