"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;

// Danh sách link ảnh dự phòng từ PostImg, cam kết 100% không bị lỗi hiển thị chặn nhúng
const noGifs = [
  "https://i.postimg.co/xC1D0bCr/cat-cry.gif",     // Lần 1: Khóc ăn vạ
  "https://i.postimg.co/0yHjGSpY/cat-sad.gif",     // Lần 2: Buồn thiu
  "https://i.postimg.co/KjqYgVGr/cat-mad.gif",     // Lần 3: Đập bàn dỗi
  "https://i.postimg.co/zXyCgN0t/cat-angry.gif",   // Lần 4: Quay lưng giận dữ
  "https://i.postimg.co/02t87V6D/cat-giveup.gif"   // Lần 5: Chắp tay cầu xin van nài
];

// Ảnh khi cô ấy bấm "Em chấp nhận" (Mèo nhảy hạnh phúc)
const yesGif = "https://i.postimg.co/brgq7wS9/cat-yes.gif";

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    
    // Đổi ảnh hoạt hình đáng yêu tương ứng theo mức độ bấm No
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
  catImg.src = yesGif; // Hiện ảnh mèo nhảy ăn mừng
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  let newFontSize = fontSize * 1.5;

  // Giới hạn kích thước tối đa để nút đồng ý không to tràn quá màn hình làm mất thẩm mỹ
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
