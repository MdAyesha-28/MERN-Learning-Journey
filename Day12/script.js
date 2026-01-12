const countEl = document.getElementById("count");
const messageEl = document.getElementById("message");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const themeBtn = document.getElementById("themeBtn");
let count = 0;
increaseBtn.addEventListener("click", function () {
    count++;
    countEl.textContent = count;
    messageEl.textContent = "Counter increased";
});
decreaseBtn.addEventListener("click", function () {
    count--;
    countEl.textContent = count;
    messageEl.textContent = "Counter decreased";
});
resetBtn.addEventListener("click", function () {
    count = 0;
    countEl.textContent = count;
    messageEl.textContent = "Counter reset";
});
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});