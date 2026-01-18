let count = 0;
const countText = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
    count++;
    countText.textContent = count;
});

document.getElementById("decrease").addEventListener("click", () => {
    count--;
    countText.textContent = count;
});
