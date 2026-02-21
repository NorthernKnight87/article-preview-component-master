const shareButton = document.querySelector(".share_button");
const sharePopup = document.querySelector(".share_popup");

shareButton.addEventListener("click", () => {
  sharePopup.classList.toggle("hide");
});
