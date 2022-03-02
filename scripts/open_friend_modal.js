let overlay, span, btn, modal, friend_box;
overlay = document.getElementById("add_friend");
span = document.getElementsByClassName("add-friend-closebtn")[0];
btn = document.getElementById("add_friend_btn");
modal = document.getElementsByClassName("add-friend-modal-content");
friend_box = document.getElementById("new_friend");


btn.addEventListener("mouseenter", function(event) {
    btn.style.transition = "0.1s";
    btn.style.backgroundColor = "#3c3e45";
    btn.style.borderWidth = "calc(100vh / 176)";
    btn.style.padding = "calc(100vh / 32) calc(((100vw / 3) / 4) + 2px)";
});
btn.addEventListener("mouseleave", function(event) {
    btn.style.transition = "0.2s";
    btn.style.backgroundColor = "#3a3b42";
    btn.style.borderWidth = "calc(100vh / 117.3)";
    btn.style.padding = "calc(100vh / 35) calc(((100vw / 3) / 4))";
});
btn.onclick = function() {
    overlay.style.display = "grid";
    btn.style.transition = "0.2s";
    btn.style.backgroundColor = "#41434a";
    btn.style.borderWidth = "calc(100vh / 176)";
    btn.style.padding = "calc(100vh / 32) calc(((100vw / 3) / 4) + 2px)";
    null_id.style.display = "none";
    multiple.style.display = "none";
    friend_box.value = "";
    friend_box.focus();
}


span.addEventListener("mouseenter", function(event) {
    span.style.color = "#565963";
    span.onmousedown = function() {
        span.style.color = "#18191c";
    };
});
span.addEventListener("mouseleave", function(event) {
    span.style.color = "#a3a6af";
});
span.onclick = function() {
    overlay.style.display = "none";
    btn.style.background = "#3a3b42";
    btn.style.borderWidth = "calc(100vh / 117.3)";
    btn.style.padding = "calc(100vh / 35) calc((100vw / 3) / 4)";
    null_id.style.display = "none";
    multiple.style.display = "none";
    friend_box.value = "";
}


window.onclick = function(event) {
    if (event.target == overlay) {
        overlay.style.display = "none";
        btn.style.background = "#3a3b42";
        btn.style.borderWidth = "calc(100vh / 117.3)";
        btn.style.padding = "calc(100vh / 35) calc((100vw / 3) / 4)";
        null_id.style.display = "none";
        multiple.style.display = "none";
        friend_box.value = "";
    }
}

document.addEventListener("keydown", closeModal);
function closeModal(e) {
    if (`${e.code}` == "Escape") {
        overlay.style.display = "none";
        btn.style.background = "#3a3b42";
        btn.style.borderWidth = "6px";
        btn.style.padding = "20px calc((100vw / 3) / 4)";
        null_id.style.display = "none";
        multiple.style.display = "none";
        friend_box.value = "";
    }
}