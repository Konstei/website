let e_focus, message_input, esc_message_input;

function sendMessage() {
    e_focus = document.getElementsByClassName("focused")[0].id.slice(0, -3);
    message_input = document.getElementById(e_focus + "txtbox").value;
    message_input = message_input.replace(/&/g, "&amp;");
    message_input = message_input.replace(/</g, "&lt;");
    message_input = message_input.replace(/>/g, "&gt;");
    message_input = message_input.replace(/"/g, "&quot;");
    message_input = message_input.replace(/`/g, "&grave;");
    message_input = message_input.replace(/'/g, "&apos;");
    esc_message_input = message_input.replace(/\\/g, "\\\\");
    document.getElementById(e_focus + "messages").innerHTML = `<span class="some-message"><span class="sent-message">${message_input}</span></span>` + document.getElementById(e_focus + "messages").innerHTML;
    document.getElementById(e_focus + "txtbox").value = "";
}


document.addEventListener("keydown", sendMessageByEnter);
function sendMessageByEnter(e) {
    if (document.getElementsByClassName("focused")[0]) {
        e_focus = document.getElementsByClassName("focused")[0].id.slice(0, -3);
        if (document.getElementById(e_focus + "txtbox") === document.activeElement) {
            if (`${e.code}` == "Shift") {
                console.log("Shift");
            } else if (`${e.code}` == "Enter"  &&  document.getElementById(e_focus + "txtbox").value.replace(/ /g, "")) {
                message_input = document.getElementById(e_focus + "txtbox").value;
                message_input = message_input.replace(/&/g, "&amp;");
                message_input = message_input.replace(/</g, "&lt;");
                message_input = message_input.replace(/>/g, "&gt;");
                message_input = message_input.replace(/"/g, "&quot;");
                message_input = message_input.replace(/`/g, "&grave;");
                message_input = message_input.replace(/'/g, "&apos;");
                esc_message_input = message_input.replace(/\\/g, "\\\\");
                document.getElementById(e_focus + "messages").innerHTML = `<span class="some-message"><span class="sent-message">${message_input}</span></span>` + document.getElementById(e_focus + "messages").innerHTML;
                document.getElementById(e_focus + "txtbox").value = "";
            } else if (`${e.code}` == "Escape") {
                document.getElementById(e_focus + "txtbox").blur();
            }
        }
    }
}