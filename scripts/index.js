// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

//место для вывода карточек
const placesList = document.querySelector(".places__list");
//шаблон места (li)
const placeTemplate = document.querySelector("#card-template").content;

//POPUP`S
const popupEdit = document.querySelector(".popup_type_edit");
const popupEditOpen = document.querySelector(".profile__edit-button");
const popupEditClose = popupEdit.querySelector(".popup__close");
const popupEditName = popupEdit.querySelector(".popup__input_type_name");
const popupEditJob = popupEdit.querySelector(".popup__input_type_description");
const popupEditSave = popupEdit.querySelector(".popup__button");
const popupEditForm = popupEdit.querySelector(".popup__form");

//.textContent
const nameTitle = document.querySelector(".profile__title");
const jobTitle = document.querySelector(".profile__description");

const popupCard = document.querySelector(".popup_type_new-card");
const popupCardOpen = document.querySelector(".profile__add-button");
const popupCardClose = popupCard.querySelector(".popup__close");
const popupCardName = popupCard.querySelector(".popup__input_type_card-name");
const popupCardLink = popupCard.querySelector(".popup__input_type_url");
const popupCardSave = popupCard.querySelector(".popup__button");
const popupCardForm = popupCard.querySelector(".popup__form");

const popupImage = document.querySelector(".popup_type_image");
const popupImageClose = popupImage.querySelector(".popup__close");
const popupImageLink = popupImage.querySelector(".popup__image");
const popupImageCaption = popupImage.querySelector(".popup__caption");

//стартовый показ карточек
renderStartCards();

//название места -  initialCards[0].name
//картинка места -  initialCards[0].link

//кнопка.addEventListener()

//сборка карточки
function addCard(name, link, likeCallBack, deleteCallBack, scaleCallBack) {
  const place = placeTemplate.querySelector(".card").cloneNode(true);
  place.querySelector(".card__image").src = link;
  place.querySelector(".card__title").textContent = name;

  const likeButton = place.querySelector(".card__like-button");

  likeButton.addEventListener("click", function (event) {
    likeCallBack(event);
  });

  const deleteButton = place.querySelector(".card__delete-button");

  deleteButton.addEventListener("click", function (event) {
    deleteCallBack(event);
  });

  const cardImage = place.querySelector(".card__image");

  cardImage.addEventListener("click", function (event) {
    scaleCallBack(event);
  });

  return place;
}

//колбек увеличения изображения
function scaleImage(event) {
  openPopup(popupImage);
  const card = event.target.closest(".card");
  popupImageLink.src = event.target.src;
  popupImageCaption.textContent =
    card.querySelector(".card__title").textContent;
  openPopup(popupImage);
}

//колбек удаления карточки
function deleteCard(event) {
  event.target.closest(".places__item").remove();
}

//колбек лайка карточки
function likeCard(event) {
  event.target.classList.toggle("card__like-button_is-active");
}

//рендер карточки отображение на сайте
function renderCard(name, link, likeCallBack, deleteCallBack, scaleCallBack) {
  placesList.prepend(
    addCard(name, link, likeCallBack, deleteCallBack, scaleCallBack)
  );
}

//отображение стартовых карточек
function renderStartCards() {
  for (let i = 0; i < initialCards.length; i++) {
    placesList.prepend(
      addCard(
        initialCards[i].name,
        initialCards[i].link,
        likeCard,
        deleteCard,
        scaleImage
      )
    );
  }
}

//а как для 3 попапов сделать это

//обработчики событий
popupEditOpen.addEventListener("click", function () {
  openPopup(popupEdit);
});
popupCardOpen.addEventListener("click", function () {
  openPopup(popupCard);
});

//обработка закрытий попапов

popupEditClose.addEventListener("click", function () {
  closePopup(popupEdit);
});
popupCardClose.addEventListener("click", function () {
  closePopup(popupCard);
});
popupImageClose.addEventListener("click", function () {
  closePopup(popupImage);
});

//обработка сохранений данных

popupEditForm.addEventListener("submit", saveEditForm);

popupCardForm.addEventListener("submit", saveCardForm);

//submit обрабатывается через form
//click на кнопку button

//увеличение аватарки при клике
