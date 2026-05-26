"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

// Danh sách link ảnh GIF từ Giphy tương ứng với số lần bấm No (từ 1 đến 5)
const noGifs = [
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHYwY3V5am96bXNreXN6Y2w3M3V0cm15bW96bXNreXN2ZmswZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/C9g8gGBygKa3g3fU7I/giphy.gif", // Giận nhẹ
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3Zhcms2ZHdxcnZ3ZGt6Nms0b3N6dW8ycXdwZnVmaXNqMmNkdmd2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v8Yn8p0w08Sg4Yh7P0/giphy.gif", // Khóc nhè
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnY5bXhpdDRnb3ZubmhzNTh4dWlsMmIweW5mdXo0aGZ1ZGdtc2o2MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/bYw3FstYw3097I0Sj5/giphy.gif", // Dỗi quay đi
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3NidmFsdnd0dnEycXNwbWZxcnd4Nms0b3N6dW8ycXdwZnVmaXNqMmNkdmd2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/76Taf7S17X46gB7D60/giphy.gif", // Khóc lụt nhà
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmswd3N6dW8ycXdwZnVmaXNqMmNkdmd2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8g7aWjQ6H1V9Y5U5O4/giphy.gif"  // Ôm đầu bất lực
];

const yesGif = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXNreXN6Y2w3M3V0cm15bW96bXNreXN2ZmswZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/K6bO297V5vj228S7R2/giphy.gif"; // Ảnh khi đồng ý

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    
    // Đổi ảnh dựa theo số lần bấm No
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
  titleElement.innerHTML = "Anh iu bé ,Anh hứa hongg làm bé buồn nữa đouuu :3";
  buttonsContainer.classList.add("hidden");
  catImg.src = yesGif; // Đổi sang ảnh hạnh phúc
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  let newFontSize = fontSize * 1.5;

  // Giới hạn không cho nút to quá 100px để giữ thẩm mỹ
  if (newFontSize > 100) {
    newFontSize = 100;
  }

  yesButton.style.fontSize = `${newFontSize}px`;
  yesButton.style.padding = "2rem 4rem"; // Tăng độ rộng nút cho cân đối
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
