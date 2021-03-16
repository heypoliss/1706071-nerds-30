const writeLink = document.querySelector(".write-us");
const writePopup = document.querySelector(".modal");
/*console.log(writePopup);*/
const writeClose = writePopup.querySelector(".modal-close");
const writeForm = writePopup.querySelector(".text-form");
const writeName = writePopup.querySelector(".yourname");
const writeEmail = writePopup.querySelector(".email");
const writeMessage = writePopup.querySelector(".message");

writeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.add("modal-show");
    writeName.focus();
});

writeClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writePopup.classList.remove("modal-show");
    writePopup.classList.remove("modal-error");
});

  writeForm.addEventListener("submit", function (evt) {
    if (!writeName.value || !writeEmail.value || !writeMessage.value) {
        evt.preventDefault();
        writePopup.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writePopup.classList.contains("modal-show")) {
        evt.preventDefault();
        writePopup.classList.remove("modal-show");
        writePopup.classList.remove("modal-error");
      }
    }
});