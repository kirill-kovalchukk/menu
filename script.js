function openMenu() {
    document.getElementById("sidebar").style.left = "0";
}
document.querySelector('.sidebar').addEventListener('mouseleave', function() {
document.getElementById("sidebar").style.left = "-250px";
});