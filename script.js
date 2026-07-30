"use strict";

// 1. CẤU HÌNH FIREBASE (Mình đã thêm dòng databaseURL cho bạn)
const firebaseConfig = {
  apiKey: "AIzaSyAfFATzxZ7rL7YwQEu3lgRIAwfFLo2l4aU",
  authDomain: "danh-gia-cua.firebaseapp.com",
  databaseURL: "https://danh-gia-cua-default-rtdb.firebaseio.com", // Dòng này rất quan trọng
  projectId: "danh-gia-cua",
  storageBucket: "danh-gia-cua.firebasestorage.app",
  messagingSenderId: "216706571557",
  appId: "1:216706571557:web:63c6fa03f864f8b516cecc"
};

// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const scoreRef = db.ref("love_score");

// 2. KHỞI TẠO BIẾN (Chuyển const history thành let history)
let currentScore = 100;
let history = [];

const currentScoreEl = document.getElementById("current-score");
const progressBarEl = document.getElementById("progress-bar");
const historyListEl = document.getElementById("history-list");
const scoreButtons = document.querySelectorAll(".score-btn");
const resetBtn = document.getElementById("reset-btn");

function updateScoreUI() {
  currentScoreEl.textContent = currentScore;
  const percentage = Math.min(Math.max(currentScore, 0), 100);
  progressBarEl.style.width = `${percentage}%`;
}

function renderHistory() {
  if (!history || history.length === 0) {
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

// 3. LẮNG NGHE DỮ LIỆU TỪ FIREBASE (Khi bạn gái chấm điểm, máy bạn sẽ tự nhảy)
scoreRef.on("value", (snapshot) => {
  const data = snapshot.val();
  if (data) {
    currentScore = data.currentScore ?? 100;
    history = data.history ?? [];
  } else {
    currentScore = 100;
    history = [];
  }
  updateScoreUI();
  renderHistory();
});

// 4. ĐẨY DỮ LIỆU LÊN FIREBASE KHI BẤM NÚT
scoreButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const points = parseInt(this.getAttribute("data-points"), 10);
    const reason = this.getAttribute("data-reason");

    currentScore += points;
    if (!Array.isArray(history)) history = [];
    history.push({ points, reason, timestamp: Date.now() });

    // Lưu thẳng lên database
    scoreRef.set({
      currentScore: currentScore,
      history: history
    });
  });
});

// 5. NÚT RESET
resetBtn.addEventListener("click", function () {
  if (confirm("Xác nhận reset bảng điểm về 100/100 cho tháng mới?")) {
    currentScore = 100;
    history = [];
    
    // Cập nhật reset lên database
    scoreRef.set({
      currentScore: 100,
      history: []
    });
  }
});
