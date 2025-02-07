const tel = document.querySelector("#phone");
const telError = document.querySelector("#phone + span.error");
const form = document.querySelector("form");
let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/gm;
let telValidity = false;

tel.addEventListener("input", (e) => {
    if(regex.test(tel.value)) {
        telValidity = true;
        telError.textContent = "";
        telError.className = "error";
    } else {
        showError();
    }
});

form.addEventListener("submit", (e) => {
    if(!telValidity) {
        showError();
        e.preventDefault();
    }
});

function showError() {
    telError.textContent = "Please enter a valid phone number.";
    telError.className = "error active";
}