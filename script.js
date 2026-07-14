"use strict";

const titleElement = document.querySelector(".title");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");
const bgMusic = document.getElementById("bg-music");

// Quản lý kích thước hiện tại của nút
let yesPaddingX = 3.5;
let yesPaddingY = 1.5;
let yesFontSize = 1.8;

let noPaddingX = 3.5;
let noPaddingY = 1.5;
let noFontSize = 1.8;

// Các câu thoại thay đổi khi bấm "Từ chối" liên tục để thuyết phục
const excuses = [
  "Ơ sao lại bấm nút này rồi 🥺",
  "Thôi mà, tha lỗi cho anh đi màaaa 😭",
  "Anh biết lỗi rồi, hứa không làm bé buồn nữa đâu...",
  "Nút này sắp biến mất rồi kìa, bấm nút xanh đi bé ơi!",
  "Năn nỉ bé iu luôn áaa 🥺❤️"
];
let excuseIndex = 0;

noButton.addEventListener("click", function () {
  // Phát nhạc ngay khi cô ấy tương tác (từ chối cũng phát luôn cho mủi lòng)
  bgMusic.play().catch(error => {
    console.log("Trình duyệt chặn phát tự động:", error);
  });

  // 1. Tăng kích thước nút ĐỒNG Ý
  yesPaddingX += 1.5;
  yesPaddingY += 0.8;
  yesFontSize += 0.4;
  
  yesButton.style.padding = `${yesPaddingY}rem ${yesPaddingX}rem`;
  yesButton.style.fontSize = `${yesFontSize}rem`;

  // 2. Giảm kích thước nút TỪ CHỐI
  if (noFontSize > 0.6) { // Giới hạn không để nút biến mất hoàn toàn ngay lập tức
    noPaddingX -= 0.5;
    noPaddingY -= 0.2;
    noFontSize -= 0.2;
    
    noButton.style.padding = `${noPaddingY}rem ${noPaddingX}rem`;
    noButton.style.fontSize = `${noFontSize}rem`;
  } else {
    noButton.classList.add("hidden"); // Nhỏ quá rồi thì ẩn luôn!
  }

  // 3. Thay đổi tiêu đề dỗi hờn
  if (excuseIndex < excuses.length) {
    titleElement.innerHTML = excuses[excuseIndex];
    excuseIndex++;
  } else {
    titleElement.innerHTML = "Bé không có lựa chọn khác đâu, bấm Đồng ý đi nèee! 😜";
  }
  
  // Bạn có thể đổi ảnh mèo dỗi tại đây nếu có
  // catImg.src = "cat-sad.gif.png"; 
});

yesButton.addEventListener("click", function () {
  // Đảm bảo nhạc phát khi đồng ý
  bgMusic.play().catch(e => console.log(e));

  titleElement.innerHTML = "Moahhh! Biết ngay bé iu sẽ tha lỗi cho anh màaa 🥰❤️✨";
  
  // Ẩn nút Từ chối, đưa nút Đồng ý về trạng thái ăn mừng
  noButton.classList.add("hidden");
  yesButton.style.padding = "1.5rem 3.5rem";
  yesButton.style.fontSize = "1.8rem";
  yesButton.innerHTML = "Yêu bé nhất trên đời! ❤️";
  
  // Đổi sang ảnh mèo hạnh phúc
  catImg.src = "cat-yes.gif.png";
});
