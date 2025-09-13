const cardObjectDefinitations = [
  { id: 1, imagePath: "/images/card-KingHearts.png" },
  { id: 2, imagePath: "/images/card-JackClubs.png" },
  { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "/images/card-AceSpades.png" },
];
const cardBackImgPath = "/images/card-back-blue.png";

let cards = [];

const playGameButtonElem = document.getElementById("playGame");

const cardContainerElem = document.querySelector(".card-container");

loadGame();

function loadGame() {
  createCards();

  cards = document.querySelectorAll(".card");

  playGameButtonElem.addEventListener("click", () => startGame());
}

function startGame() {}

function createCards() {
  cardObjectDefinitations.forEach((cardItem) => {
    createCard(cardItem);
  });
}

function createCard(cardItem) {
  //Create div elements that will make up the card
  const cardElem = createElement("div");
  const cardInnerElem = createElement("div");
  const cardFrontElem = createElement("div");
  const cardBackElem = createElement("div");

  //Create the front and back image elements for the card
  const cardFrontImg = createElement("img");
  const cardBackImg = createElement("img");

  //adding the class and id to a card
  addClassToElement(cardElem, "card");
  addIdToElement(cardElem, cardItem.id);

  //add class to inner card element

  addClassToElement(cardInnerElem, "card-inner");

  //add class to front card element
  addClassToElement(cardFrontElem, "card-front");

  //add class to back card element
  addClassToElement(cardBackElem, "card-back");

  // Add src attributes and correct values to img elements - back of cards
  addSrcToImageElem(cardBackImg, cardBackImgPath);

  //add src attribute and approirate value to img element - front of cards

  addSrcToImageElem(cardFrontImg, cardItem.imagePath);

  //assign class to back image element
  addClassToElement(cardBackImg, "card-img");
  //assign class to back image element
  addClassToElement(cardFrontImg, "card-img");

  //Add front image element as child elekmnt to front card element
  addChildElement(cardFrontElem, cardFrontImg);

  //Add back image element as child elekmnt to back card element
  addChildElement(cardBackElem, cardBackImg);

  // add back card element as child element to inner card elemnt
  addChildElement(cardInnerElem, cardBackElem);
  // add front card element as child element to inner card elemnt
  addChildElement(cardInnerElem, cardFrontElem);

  //add inner card element as a child element to card element
  addChildElement(cardElem, cardInnerElem);
  // add card element as child elemnt to appropirate grid cell

  addCardToGridCell(cardElem);
}

function createElement(elemType) {
  return document.createElement(elemType);
}

function addClassToElement(elem, className) {
  elem.classList.add(className);
}

function addIdToElement(elem, id) {
  elem.id = id;
}

function addSrcToImageElem(imgElem, src) {
  imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}

function addCardToGridCell(card) {
  const cardPositionClassName = mapCardToGridCell(card);
  const cardPosElem = document.querySelector(cardPositionClassName);

  addChildElement(cardPosElem, card);
}

function mapCardToGridCell(card) {
  if (card.id === 1) {
    return ".card-pos-a";
  } else if (card.id === 2) {
    return ".card-pos-b";
  } else if (card.id === 3) {
    return ".card-pos-c";
  } else if (card.id === 4) {
    return ".card-pos-d";
  }
}
