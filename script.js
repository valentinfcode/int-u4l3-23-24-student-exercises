let button = document.querySelector(".password-check");


// 1. Take a look at the code to figure out the password.
// 2. Once you figure out the password, try changing it.

button.addEventListener("click", function() {

    let password = document.querySelector(".password-input").value;

    console.log(password);

    if (password === "1234") {
        document.querySelector(".yes").style = "display:block";
        document.querySelector(".denied").style = "display:none";
    } else {
        document.querySelector(".denied").style = "display:block";
    }

});