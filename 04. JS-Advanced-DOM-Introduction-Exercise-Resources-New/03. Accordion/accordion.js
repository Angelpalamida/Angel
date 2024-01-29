function toggle() {
    var extraContent = document.getElementById("extra");
    var button = document.querySelector('.head .button');

    if (extraContent.style.display === "block" || extraContent.style.display === "") {
        // If the content is visible, hide it and change the button text to "More"
        extraContent.style.display = "none";
        button.innerHTML = "More";
    } else {
        // If the content is hidden, show it and change the button text to "Less"
        extraContent.style.display = "block";
        button.innerHTML = "Less";
    }
}