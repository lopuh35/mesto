//функция открытия попапа
function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keyup", handleEsc);
  document.addEventListener("mouseup", handleOverlay);
}

//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keyup", handleEsc);
  document.removeEventListener("mouseup", handleOverlay);
}

//обработка закрытия на ESCAPE
function handleEsc(event) {
  if (event.key === "Escape") {
    const activePopup = document.querySelector(".popup_is-opened");
    closePopup(activePopup);
  }
}

//обработка закрытия по клику на оверлей
function handleOverlay(event) {
  const activePopup = document.querySelector(".popup_is-opened");

  if (event.target == activePopup) {
    closePopup(activePopup);
  }
}

function saveEditForm(event) {
  event.preventDefault(); //предотвращает обновление сайта при отправке формы
  nameTitle.textContent = popupEditName.value;
  jobTitle.textContent = popupEditJob.value;
  popupEditName.value = "";
  popupEditJob.value = "";
  closePopup(popupEdit);
}

function saveCardForm(event) {
  event.preventDefault();
  renderCard(
    popupCardName.value,
    popupCardLink.value,
    likeCard,
    deleteCard,
    scaleImage
  );

  popupCardName.value = "";
  popupCardLink.value = "";
  closePopup(popupCard);
}
