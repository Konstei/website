const buttons = document.querySelectorAll(".contact");
let i, contact_content, contact;

function openContact(evt, contactName) {

    contact_content = document.getElementsByClassName("contact-content");
    for (i=0; i < contact_content.length; i++) {
        contact_content[i].style.display = "none";
    }
    
    contact = document.getElementsByClassName("contact");
    for (i=0; i < contact.length; i++) {
        contact[i].className = contact[i].className.replace(" focused", "");
    }
    document.getElementById(contactName).style.display = "block";
    evt.currentTarget.className += " focused";
    

    buttons.forEach((item) =>
    item.addEventListener("click", function(event) {
        buttons.style.transition = "0.2s";
        buttons.style.backgroundColor = "#161719";
        item.classList.add("focused");
        item.style.transition = "0.2s";
        item.style.backgroundColor = "#2e2f35";
    }));
    
}