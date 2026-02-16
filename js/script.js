function login() {
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";
}