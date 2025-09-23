const cta = document.querySelector(".cta a");
const alertBox = document.querySelector("#booking-alert");

cta.classList.remove("hide");
alertBox.classList.add("hide");

function reveal(e, current) {
    e.preventDefault();
    current.textContent === "Reserve agora!" 
        ? cta.textContent = "Oooops!" 
        : cta.textContent = "Reserve Agora!";
    alertBox.classList.toggle("hide");
}

cta.addEventListener('click', function(e) {
    reveal(e, this);
    console.log("O botão foi clicado!");
});
