const loginForm = document.getElementById("form-login");
const loginSubmit = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginReset = document.getElementById("login-form-reset");

loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let data = {
        username = loginForm.username.value,
        password = loginForm.password.value
    };
    
    fetch('./back/app.js', {
        method: 'post',
        body: data
    }).then(function(response){
        return response.text();
    }).then(function (text){
        return console.log(text);
    }).catch(function(error){
        console.error(error);;
    })
})

loginReset.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
})