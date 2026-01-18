document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (email === "" || password === "") {
        error.textContent = "All fields are required";
    } else {
        error.textContent = "Login Successful!";
        error.style.color = "green";
    }
});
