const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const music = document.getElementById("bgMusic");

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
    music.play().then(() => {
        console.log("Musik berhasil dimainkan!");
    }).catch(err => {
        console.error("Error memainkan musik:", err);
        alert("Musik diblokir browser. Klik tombol play manual jika muncul.");
    });
    startSnowEffect();
});

function startSnowEffect() {
    setInterval(() => {
        snowEffect();}, 5000); /*Detik turun salju*/
}

function snowEffect() {
    const snowCount = 10 + Math.floor(Math.random() * 6);
    for (let i = 0; i < snowCount; i++) {
        const snow = document.createElement("div");
        snow.classList.add("snowflake");
        snow.textContent = "❄";

        snow.style.left = Math.random() * 100 + "vw";
        snow.style.fontSize = 15 + Math.random() * 25 + "px";
        snow.style.animationDuration = 5 + Math.random() * 5 + "s"; /*durasi jatuh salju*/

        document.body.appendChild(snow);

        /*hapus animasi salju*/
        setTimeout(() => snow.remove(), parseFloat(snow.style.animationDuration) * 1000);
    }
}