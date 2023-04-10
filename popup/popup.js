const mainButton = document.getElementById("mainButton");

mainButton.addEventListener("click", buttonHandler);

function buttonHandler() {
    // Open Facebook in a new window
    window.open("../dashboard/dashboard.html", "_blank");
}