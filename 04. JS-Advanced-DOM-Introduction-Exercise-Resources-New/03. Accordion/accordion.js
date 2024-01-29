function toggle() {
    let extraContent = document.getElementById("extra");
    let button = document.querySelector('.head .button');

    if (extraContent.style.display === "block" || extraContent.style.display === "") {
       
        extraContent.style.display = "none";
        button.innerHTML = "More";
    } else {
     
        extraContent.style.display = "block";
        button.innerHTML = "Less";
    }
}