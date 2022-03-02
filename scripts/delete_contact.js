let del_contact, id_name, temp=0;
del_contact = document.getElementsByClassName("delete-contact");

function showDeleteBtns() {
    if (temp) {
        for (i=0; i<=(del_contact.length)-1; i++) {
            del_contact[i].style.display = "none";
        }
        temp = 0;
    } else {
        for (i=0; i<=(del_contact.length)-1; i++) {
            del_contact[i].style.display = "flex";
        }
        temp = 1;
    }
}

for (i=1; i<=del_contact.length; i++) {
    del_contact[i].onclick = function() {
        id_name = del_contact[i].id.slice(0, -7);
        console.log(del_contact[i]);
        // document.getElementById("contact_list").innerHTML -= document.getElementById(id_name);
    }
}