"use strict";

// Tập hợp các lời nhắn cho từng chủ đề
const messages = {
  hangngay: 
    "Đừng quên ăn uống đúng giờ và uống đủ nước nhé. Dù bận rộn đến đâu cũng hãy nhớ giữ gìn sức khỏe. Chăm sóc bản thân thật tốt nhé! có bệnh thì nhớ uống thuốc nghe chưa bé tuyền ngốc ",
  
  buon: 
    "Nếu hôm nay có chuyện làm em buồn, cứ khóc một chút cũng không sao. Khóc xong rồi thì thở sâu, ngày mai mọi thứ rồi sẽ ổn thôi. Em đã làm rất tốt rồi chị bé làm rất giỏi òi moaz.",
  
  hoc: 
    "chòi ôi chị bé học cả đêm luôn mò hong sao hết cố gắng lắm rồi tốt lắm òi hong sao nè moaz moaz moaz vui lên nhé chị bé giỏi lắm luôn á!",
  
  giadinh: 
    "em thương em thương ông bà nội hay ông anh hai kì cục quá ha bắt nạt chị bé tui quài ò em thương thương moaz moaz đã ăn gì chưa nè ăn đi cho đỡ bùn nhen",
  
  love: 
    "ảnh làm chị buôn hay bỏ chị bỏ em thương em thương nghỉ ngơi vô mơ em ôm nhá moaz moaz em yêu chị lắm á kệ đi tìm người khác hong sao nhen ",
  
  nhokiet: 
    "em xin lỗi..."
};

const topicButtons = document.querySelectorAll(".topic-btn");
const messageBox = document.getElementById("message-box");
const messageText = document.getElementById("message-text");
const closeBtn = document.getElementById("close-btn");

// Xử lý sự kiện khi bấm vào từng ô
topicButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const topic = this.getAttribute("data-topic");
    if (messages[topic]) {
      messageText.innerText = messages[topic];
      messageBox.classList.remove("hidden");
      // Cuộn nhẹ xuống lời nhắn nếu màn hình nhỏ
      messageBox.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
});

// Nút đóng lời nhắn
closeBtn.addEventListener("click", function () {
  messageBox.classList.add("hidden");
});
