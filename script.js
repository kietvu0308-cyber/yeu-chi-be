"use strict";

let currentScore = 100;
const history = [];

const totalScoreEl = document.getElementById("total-score");
const progressBarEl = document.getElementById("progress-bar");
const historyListEl = document.getElementById("history-list");
const scoreButtons = document.querySelectorAll(".score-btn");
const resetBtn = document.getElementById("reset-btn");

// Cập nhật giao diện điểm và thanh progress
function updateScoreUI() {
  totalScoreEl.textContent = currentScore;
  
  // Tính % thanh tiến trình (giới hạn 0 - 100%)
  const percentage = Math.min(Math.max(currentScore, 0), 100);
  progressBarEl.style.width = `${percentage}%`;

  // Đổi màu thanh tiến trình tùy thuộc mức điểm
  if (currentScore >= 80) {
    progressBarEl.style.backgroundColor = "#4caf50"; // Xanh lá
  } else if (currentScore >= 50) {
    progressBarEl.style.backgroundColor = "#ff9800"; // Cam
  } else {
    progressBarEl.style.backgroundColor = "#f44336"; // Đỏ
  }
}

// Thêm lịch sử sự kiện
function renderHistory() {
  if (history.length === 0) {
    historyListEl.innerHTML = '<li class="empty-msg">Chưa có đánh giá nào trong tháng này.</li>';
    return;
  }

  historyListEl.innerHTML = "";
  // Hiển thị đánh giá mới nhất lên đầu
  [...history].reverse().forEach((item) => {
    const li = document.createElement("li");
    li.className = `history-item ${item.points > 0 ? "bonus-item" : "penalty-item"}`;
    
    const changeText = item.points > 0 ? `+${item.points}` : `${item.points}`;
    
    li.innerHTML = `
      <span class="history-reason">${item.reason}</span>
      <span class="history-points">${changeText} điểm</span>
    `;
    historyListEl.appendChild(li);
  });
}

// Xử lý khi bấm nút cộng / trừ điểm
scoreButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const points = parseInt(this.getAttribute("data-points"), 10);
    const reason = this.getAttribute("data-reason");

    currentScore += points;
    history.push({ points, reason });

    updateScoreUI();
    renderHistory();
  });
});

// Nút Đặt lại về 100 điểm
resetBtn.addEventListener("click", function () {
  if (confirm("Xác nhận reset bảng điểm về 100 điểm cho tháng mới?")) {
    currentScore = 100;
    history.length = 0;
    updateScoreUI();
    renderHistory();
  }
});

// Khởi chạy ban đầu
updateScoreUI();
