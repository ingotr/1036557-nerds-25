// Раздел переменных
var modalWrite = document.querySelector(".modal-writeus");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".modal-close");
var form = modal.querySelector("form");
var modalName = modal.querySelector("[name=name]");
var email = modal.querySelector("[name=email]");
var emailText = modal.querySelector("[name=email-text]");

var isStorageSupport = true;

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

// Раздел открытия формы
modalWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");

  if (storage) {
    modalName.value = localStorage.getItem("modalName");
    email.value = localStorage.getItem("email");
    emailText.focus();
  } else {
    modalName.focus();
  }
});

// Раздел закрытия формы
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!modalName.value || !email.value || !emailText.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = popup.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("modalName", modalName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});
