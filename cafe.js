
function showPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}


function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}


window.addEventListener("click", function (event) {
    let popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});