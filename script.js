"use strict";

const titleElement = document.querySelector(".title");
const nextButton = document.querySelector(".btn--next");
const yesButton = document.querySelector(".btn--yes");
const catImg = document.querySelector(".cat-img");

// Chuỗi câu chuyện và lời nhắn qua từng trang của bạn
const story = [
  {
    img: "cat-2.gif.png",
    text: "Chào chị bé nhá cảm ơn chị đã đòng ý đi home với em mục đích chính không phải là cơ thể chị mà là chúng mình có thể có không gian riêng tư với nhau để em có thể trò chuyện tâm sự cùng chị mà những người trước đó họ đã không muốn nghe 🥰"
  },
  {
    img: "cat-5.gif.png",
    text: "thời gian qua em đã phải có kiềm hết những thứ mà người khác thấy phiền nhưng chị bé thì lại cho em cảm giác chị có thể bên em trong lúc em tồi tệ nhất và ngược lại chị cũng tin tưởng bên em khi chị suy sụp nhất  ❤️"
  },
  {
    img: "cat-3.gif.png",
    text: "một cậu nhóc học lớp 4 mà đã suy nghĩ đến việc 44 thì nó không dễ dàng gì mà sống em cũng không tin mình có thể sống đến bây giờ may thay vì mình có thể gặp nhau 🥺"
  },
  {
    img: "cat-6.gif.png",
    text: "những chuyện em đã trãi qua nó rất tồi tệ khiến em không quên được dù nó đã qua nhiều năm nhưng em vẫn khôgn quên được những trận đòn roi đó những ánh mắt phán xét đó và những lời lẻ mà một đứa trẻ 10 tuổi khác khi nghe sẽ chắc chắn khóc nhưng thằng nhóc năm ấy đã xem những điều đó là bình thường 😭"
  },
  {
    img: "cat-yes.gif.png",
    text: "em yêu chị bé mong là mình có thể đến với nhau trọn vẹn nhé , có gì cứ nói với em nhé , em yêu chị lắm , làm người yêu em nhé ✨"
  }
];

let currentStep = 0;

nextButton.addEventListener("click", function () {
  currentStep++;

  // Nếu chưa đến trang cuối cùng
  if (currentStep < story.length) {
    // Cập nhật hình ảnh và lời nhắn tương ứng với bước hiện tại
    catImg.src = story[currentStep].img;
    titleElement.innerHTML = story[currentStep].text;

    // Nếu đã chạm đến trang cuối của câu chuyện
    if (currentStep === story.length - 1) {
      nextButton.classList.add("hidden"); // Ẩn nút "Tiếp tục" đi
      yesButton.classList.remove("hidden"); // Hiện nút "Đồng ý" lên
    }
  }
});

// Sự kiện khi bạn gái bấm nút "Đồng ý" ở trang cuối
yesButton.addEventListener("click", function () {
  titleElement.innerHTML = "Moahhh! Đi thôii nào công chúa của anhhh 🥰❤️✨";
  yesButton.classList.add("hidden");
  catImg.src = "cat-yes.gif.png"; // Giữ ảnh chú mèo bắn tim hạnh phúc
});
