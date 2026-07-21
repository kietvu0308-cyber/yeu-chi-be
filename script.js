"use strict";

const messages = {
  luck: 
    "Gửi em thật nhiều may mắn!  bài làm trôi chảy từ câu đầu tiên đến câu cuối cùng nha! 🍀✨",
  
  calm: 
    "Hít một hơi thật sâu nào! Em đã học hành chăm chỉ rồi, cứ tự tin làm hết khả năng của mình thôi. Anh tin em làm được mà! 💪🏻❤️",
  
  easy: 
    "Chúc em bé mở đề ra là trúng ngay bài đã ôn, nhìn câu nào cũng thấy quen, làm bài siêu mượt nhé! 📖💯",
  
  reward: 
    "Thi xong rồi anh dẫn đi ăn ngon, uống trà sữa liền nha! Cố gắng một chút nữa thôi rồi tha hồ xả hơi nè! 🧋🍰",
  
  hug: 
    "Anh Kiệt luôn ở sau lưng cổ vũ em. Dù đề khó hay dễ thì em vẫn là tuyệt nhất trong mắt anh. Thi tốt nha em bé! 🥰 ôm một cái thật chặt!"
};

const topicButtons = document.querySelectorAll(".topic-btn");
const messageBox = document.getElementById("message-box");
const messageText = document.getElementById("message-text");
const closeBtn = document.getElementById("close-btn");

topicButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const topic = this.getAttribute("data-topic");
    if (messages[topic]) {
      messageText.innerText = messages[topic];
      messageBox.classList.remove("hidden");
      messageBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});

closeBtn.addEventListener("click", function () {
  messageBox.classList.add("hidden");
});
