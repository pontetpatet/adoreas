document.addEventListener("DOMContentLoaded", function () {
    let yesBtn = document.getElementById("yesBtn");
    let noBtn = document.getElementById("noBtn");
    let responseMessage = document.getElementById("responseMessage");

    yesBtn.addEventListener("click", function () {
        responseMessage.innerText = "Yay! 💖 Sex na tayo please :(";
        responseMessage.classList.remove("hidden");
        noBtn.style.display = "none"; 
    });

    noBtn.addEventListener("mouseover", function () {
        let x = Math.random() * window.innerWidth * 0.6;
        let y = Math.random() * window.innerHeight * 0.6;
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;
    });
});
