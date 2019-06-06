// Раздел переменных
var modalwrite = document.querySelector(".modal-writeus");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".modal-close");

// Раздел открытия формы
modalwrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});

// Раздел закрытия формы
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});
