const writeLink=document.querySelector(".write-us"),writePopup=document.querySelector(".modal"),writeClose=writePopup.querySelector(".modal-close"),writeForm=writePopup.querySelector(".text-form"),writeName=writePopup.querySelector(".yourname"),writeEmail=writePopup.querySelector(".email"),writeMessage=writePopup.querySelector(".message");writeLink.addEventListener("click",function(e){e.preventDefault(),writePopup.classList.add("modal-show"),writeName.focus()}),writeClose.addEventListener("click",function(e){e.preventDefault(),writePopup.classList.remove("modal-show"),writePopup.classList.remove("modal-error")}),writeForm.addEventListener("submit",function(e){writeName.value&&writeEmail.value&&writeMessage.value||(e.preventDefault(),writePopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&writePopup.classList.contains("modal-show")&&(e.preventDefault(),writePopup.classList.remove("modal-show"),writePopup.classList.remove("modal-error"))});