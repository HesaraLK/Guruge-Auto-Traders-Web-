function login() {
    const username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    window.location.href = "dashboard.html";

}

/*Reset button*/

function reset_vehicle() {
    document.getElementById("vehicleID").value = "";
    document.getElementById("type").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";
    document.getElementById("year").value = "";
    document.getElementById("price").value = "";
    document.getElementById("status").value = "";
}

function reset_customer() {
    document.getElementById("customerID").value = "";
    document.getElementById("customerName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("phoneNumber").value = "";
}

function reset_sale() {
    document.getElementById("saleID").value = "";
    document.getElementById("vID").value = "";
    document.getElementById("cID").value = "";
    document.getElementById("date").value = "";
    document.getElementById("amount").value = "";
}

function backToHome() {
    window.location.href = "dashboard.html";
}
