// =====================
// Part 1: Basics
// =====================
document.getElementById("check-age-btn").addEventListener("click", () => {
  let age = prompt("Enter your age:");
  age = parseInt(age);

  let result = "";
  if (isNaN(age)) {
    result = "❌ Please enter a valid number!";
  } else if (age >= 18) {
    result = `✅ You are ${age}. You are an adult.`;
  } else {
    result = `ℹ️ You are ${age}. You are a minor.`;
  }

  document.getElementById("age-result").textContent = result;
});

// =====================
// Part 2: Functions
// =====================
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}

document.getElementById("calc-total-btn").addEventListener("click", () => {
  let samplePrices = [10, 20, 15, 5];
  let total = calculateTotal(samplePrices);
  document.getElementById("total-result").textContent =
    `🛒 Total price: $${total}`;
});

// =====================
// Part 3: Loops
// =====================
document.getElementById("show-numbers-btn").addEventListener("click", () => {
  let numbersList = document.getElementById("numbers-list");
  numbersList.innerHTML = ""; // reset list

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    numbersList.appendChild(li);
  }
});

// =====================
// Part 4: DOM Manipulation
// =====================
document.getElementById("toggle-theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("add-item-btn").addEventListener("click", () => {
  let dynamicList = document.getElementById("dynamic-list");
  let newItem = document.createElement("li");
  newItem.textContent = `Item ${dynamicList.children.length + 1}`;
  dynamicList.appendChild(newItem);
});

// Extra DOM Example: Change title text on hover
document.querySelector("header h1").addEventListener("mouseover", () => {
  document.querySelector("header h1").textContent = "🔥 JavaScript in Action!";
});

document.querySelector("header h1").addEventListener("mouseout", () => {
  document.querySelector("header h1").textContent = "Mastering JavaScript Fundamentals";
});
