// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("El sitio web de Benjamí Calvillo Melero está listo.");

    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    menuToggle.addEventListener("click", function() {
        if (sidebar.style.left === "-250px") {
            sidebar.style.left = "0";
            mainContent.style.marginLeft = "250px";
        } else {
            sidebar.style.left = "-250px";
            mainContent.style.marginLeft = "0";
        }
    });
});
