var button = document.querySelector(".feedback-btn");
var overlay = document.querySelector(".modal-overlay");
var form = document.querySelector(".feedback-form");
var close = document.querySelector(".feedback-form-close");

button.addEventListener("click", function(event) {
      event.preventDefault();
overlay.classList.add("modal-overlay-show");
form.classList.add("feedback-form-show");
});

close.addEventListener("click", function(event) {
      event.preventDefault();
overlay.classList.remove("modal-overlay-show");
form.classList.remove("feedback-form-show");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (form.classList.contains("feedback-form-show")) {
form.classList.remove("feedback-form-show");
overlay.classList.remove("modal-overlay-show");
}
}
});
