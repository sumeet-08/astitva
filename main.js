const club = document.querySelectorAll(".club")

club.forEach((club) => {
    club.addEventListener("click", () => {
        club.classList.toggle("active");
    });
});

const club1 = document.querySelectorAll(".club1")

club1.forEach((club1) => {
    club1.addEventListener("click", () => {
        club1.classList.toggle("active");
    });
});

