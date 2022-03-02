let input, submit, null_id, multiple, elem, esc_input;
submit = document.getElementById("submit_new_friend");
null_id = document.getElementById("null_friend");
multiple = document.getElementById("existing_friend");
overlay = document.getElementById("add_friend");


submit.addEventListener("mouseenter", function(event) {
    submit.addEventListener("click", function(event) {
        submit.style.backgroundColor = "#292a2f";
    });
});

submit.addEventListener("mouseleave", function(event) {

});


submit.addEventListener("click", function(event) {
    null_id.style.display = "none";
    input = document.getElementById("new_friend").value;
    multiple.style.display = "none";
    input = input.replace(/&/g, "&amp;");
    input = input.replace(/</g, "&lt;");
    input = input.replace(/>/g, "&gt;");
    input = input.replace(/"/g, "&quot;");
    input = input.replace(/`/g, "&grave;");
    input = input.replace(/'/g, "&apos;");
    esc_input = input.replace(/\\/g, "\\\\");

    if (input) {
        elem = document.getElementById(input);
        if (elem) {
            setTimeout(() => { multiple.style.display = "block";}, 10);
        } else {
            null_id.style.display = "none";
            multiple.style.display = "none";
            setTimeout(() => { overlay.style.display = "none";}, 10);
            document.getElementById("contact_list").innerHTML += `<button class="contact" id="${input}_btn" onclick="openContact(event, '${esc_input}')"> <span class="contact-name-btn">${input}</span> <span class="delete-contact" id="${input}_delete">&times;</span> </button>`;
            document.getElementById("upper_page").innerHTML +=  `<div id="${input}" class="contact-content">
                                                                    <div class="contact-name">
                                                                        <div> ${input} </div>
                                                                    </div>
                                                                    <div class="messages" id="${input}_messages">
                                                                    </div>
                                                                    <div class="message-bar">
                                                                        <span class="embed-files"> + </span>
                                                                        <input type="file" class="upload-embed">
                                                                        <span class="emojis">  </span>
                                                                        <input type="text" id="${input}_txtbox" placeholder="Message" class="send-message-box" maxlength="658">
                                                                        <span class="send-message-btn" onclick="sendMessage()"> ➤ </span>
                                                                    </div>
                                                                </div>`
            friend_box.value = "";
        }
    } else {
        setTimeout(() => { null_id.style.display = "block";}, 10);
    }
});

document.addEventListener("keydown", addFriend);
function addFriend(e) {
    if (document.getElementById("new_friend") === document.activeElement) {
        if (`${e.code}` == "Enter") {
            null_id.style.display = "none";
            multiple.style.display = "none";
            input = document.getElementById("new_friend").value;
            input = input.replace(/&/g, "&amp;");
            input = input.replace(/</g, "&lt;");
            input = input.replace(/>/g, "&gt;");
            input = input.replace(/"/g, "&quot;");
            input = input.replace(/`/g, "&grave;");
            input = input.replace(/'/g, "&apos;");
            esc_input = input.replace(/\\/g, "\\\\");

            if (input) {
                elem = document.getElementById(input);
                if (elem) {
                    setTimeout(() => { multiple.style.display = "block";}, 10);
                } else {
                    null_id.style.display = "none";
                    multiple.style.display = "none";
                    setTimeout(() => { overlay.style.display = "none";}, 10);
                    document.getElementById("contact_list").innerHTML += `<button class="contact" id="${input}_btn" onclick="openContact(event, '${esc_input}')"> <span class="contact-name-btn">${input}</span> <span class="delete-contact" id="${input}_delete">&times;</span> </button>`;
                    document.getElementById("upper_page").innerHTML +=  `<div id="${input}" class="contact-content">
                                                                            <div class="contact-name">
                                                                                <div> ${input} </div>
                                                                            </div>
                                                                            <div class="messages" id="${input}_messages">
                                                                            </div>
                                                                            <div class="message-bar">
                                                                                <span class="embed-files"> + </span>
                                                                                <input type="file" class="upload-embed">
                                                                                <span class="emojis">  </span>
                                                                                <input type="text" id="${input}_txtbox" placeholder="Message" class="send-message-box" maxlength="658">
                                                                                <span class="send-message-btn" onclick="sendMessage()"> ➤ </span>
                                                                            </div>
                                                                        </div>`
                    friend_box.value = "";
                }
            } else {
                setTimeout(() => { null_id.style.display = "block";}, 10);
            }
        }
    }
}