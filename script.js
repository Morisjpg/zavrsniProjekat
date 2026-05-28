function toggleProducts() {
  const cards = document.querySelectorAll("#productGrid .card");

  cards.forEach(card => {
    card.classList.toggle("hidden");
  });
}

document.querySelector(".form").addEventListener("submit", function() {
    

    const ime = document.querySelectorAll(".form input")[0].value;
    const email = document.querySelectorAll(".form input")[1].value;
    const datum = document.querySelectorAll(".form input")[2].value;
    const vreme = document.querySelectorAll(".form input")[3].value;
    const predmet = document.querySelectorAll(".form input")[4].value;

    if (!ime || !email || !datum || !vreme || !predmet) {
        alert(" Popuni sva polja!");
    } else {
        alert(" Rezervacija uspešna!");
        document.querySelector(".form").reset();
    }
});

