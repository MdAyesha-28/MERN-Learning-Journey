document.getElementById("fetchBtn").addEventListener("click", () => {
    const result = document.getElementById("result");
    result.textContent = "Loading...";

    fakeApiCall()
        .then(data => {
            result.textContent = data;
        })
        .catch(error => {
            result.textContent = error;
        });
});

function fakeApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User data fetched successfully!");
        }, 2000);
    });
}
