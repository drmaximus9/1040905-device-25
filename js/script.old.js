var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-write");
var close = document.querySelector(".modal-close");

var form = popup.querySelector("form");

var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("username");
} catch (err) {
    isStorageSupport = false;
}
form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
       if (isStorageSupport) {
        localStorage.setItem("username", username.value);
       } 
        
    }

});
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        username.value = storage;
        email.focus();
    } else {
        username.focus();
    }
    
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode ===27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
})

close.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

var maplink = document.querySelector(".contacts-button");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close-map");

maplink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
    
    
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
    
});


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode ===27) {
        if (mapPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
            
        }
    }
})


