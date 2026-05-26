"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

// Đổi tên gọi khớp chính xác với đuôi file thực tế đang nằm trên GitHub của bạn
// Vì thiếu ảnh số 4 nên mình sẽ dùng lại ảnh 3 để web không bị trống ảnh
const noGifs = [
  "cat-1.gif.png",
  "cat-2.gif.png",
  "cat-3.gif.png",
  "cat-3.gif.png", // Dùng tạm ảnh 3 thay thế cho ảnh số 4 bị thiếu
  "cat-5.gif.png"
];

const yesGif = "cat-yes.gif.png";

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    
    if (noCount <= MAX_IMAGES) {
      catImg.src = noGifs[imageIndex - 1];
    }

    resizeYesButton();
    updateNoButtonText();
    
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Anh iu bé ,Anh hứa hongg làm bé buồn nữa đouuu :3 ❤️";
  buttonsContainer.classList.add("hidden");
  catImg.src = yesGif;
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  let newFontSize = fontSize * 1.5;

  if (newFontSize > 80) {
    newFontSize = 80;
  }

  yesButton.style.fontSize = `${newFontSize}px`;
  yesButton.style.padding = "2rem 4rem";
}

function generateMessage(noCount) {
  const messages = [
    "Không Bao Giờ",
    "Anh bicc lỗi rồi ạa 😭",
    "Mong bé tha lỗi choo anhh :((",
    "Anhh saii rồi, anh đáng trách ạ 🥺",
    "Bé đừng giận anh nữa nhoo",
    "Anhhh iu bé nhắm nhunnn đóoooo ❤️",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
