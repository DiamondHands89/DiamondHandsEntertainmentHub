//Login input fields appear onclick//
document.getElementById("Loginbtn").addEventListener("click", function() {
    var loginForm = document.getElementById("LoginForm");
    if (loginForm.style.display === "none" || loginForm.style.display === "") {
        loginForm.style.display = "block";
    } else {
        loginForm.style.display = "none";
    }
})