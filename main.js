const club = document.querySelectorAll(".club")

club.forEach((club) => {
    club.addEventListener("click", () => {
        club.classList.toggle("active");
    });
});