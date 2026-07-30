"use strict";

let currentScore = 100;
const history = [];

const currentScoreEl = document.getElementById("current-score");
const progressBarEl = document.getElementById("progress-bar");
const historyListEl = document.getElementById("history-list");
const scoreButtons = document.querySelectorAll(".score-btn");
const resetBtn = document.getElementById("reset-btn");

function updateScoreUI() {
  currentScoreEl.textContent = currentScore;
  
  // Tính tỷ lệ % cho thanh tiến trình trắng lồng bên trong
  const percentage = Math.min(Math.max(currentScore, 0), 100);
  progressBarEl.style.width = `${percentage}%`;
}

function renderHistory() {
  if (history.length === 0) {
    historyListEl.innerHTML = '<li class="empty-msg">Chưa có đánh giá nào trong tháng này.</li>';
    return;
  }

  historyListEl.innerHTML = "";
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

resetBtn.addEventListener("click", function () {
  if (confirm("Xác nhận reset bảng điểm về 100/100 cho tháng mới?")) {
    currentScore = 100;
    history.length = 0;
    updateScoreUI();
    renderHistory();
  }
});

updateScoreUI();
