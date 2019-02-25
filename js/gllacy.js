 var button = document.querySelector(".callback-link");
 var popup = document.querySelector(".modal-feedback");
 var close = popup.querySelector(".modal-close");

 button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-clik");
});
 close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-clik");
});
