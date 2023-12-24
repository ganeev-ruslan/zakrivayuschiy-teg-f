/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll(".like-icon");
const likeButtonArray = document.querySelectorAll(".card__like-button");
const iconButtonArray = document.querySelectorAll(".card__icon-button");

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle("is-liked");
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes("is-liked")) {
    setTimeout(
      () => (button.querySelector(".button__text").textContent = "Unlike"),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector(".button__text").textContent = "Like"),
      500
    );
  }
}


document.getElementById('saveButton').addEventListener("click", function() {
  document.getElementById('my_modal').classList.add("open")
  
});

document.getElementById('close').addEventListener("click", function() {
  document.getElementById('my_modal').classList.remove("open")
  
});

window.addEventListener("keydown", (e) => {
  if (e.key === 'Escape'){
    document.getElementById('my_modal').classList.remove('open')
  }
})

document.querySelector('#my_modal .modal__box').addEventListener('click', event => {
  event._isClickWithInModal = true;
});

document.getElementById('my_modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open')
});


