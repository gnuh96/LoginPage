const loginForm = document.getElementById("form-login");
const loginSubmit = document.getElementById("login-form-submit");
const loginReset = document.getElementById("login-form-reset");

//Send user and password to server for verfiy
loginSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    let data = {
        username: username,
        password: password
    };
    
    fetch('http://localhost:8080/login', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => response.text()
    ).then(function(response){
        if(response === "yes") {
            alert("You have successfully logged in.");
        } else {
            alert("Invalid username and/or password");
        }
    }).catch(function(error){
        console.error(error);;
    })
})

// Set event for reset button
loginReset.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
})